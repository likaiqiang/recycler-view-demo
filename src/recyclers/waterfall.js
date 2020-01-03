import { Recycler, Source } from 'recycler-view';
import { NumberRenderer } from './common';

export class WaterfallSource extends Source {
  constructor() {
    super();

    this.countPerPage = 30;
    this.data = [];
    this.maxScrollHeightOfColumns = [0, 0];
    this.positions = [];

    this.fetch();
  }

  getHeight(index, recycler) {
    return this.data[index].height;
  }

  getWidth(index, recycler) {
    return '50%';
  }

  getScrollTop(index, recycler) {
    return this.positions[index].scrollHeight - this.getHeight(index);
  }

  getMaxScrollHeight(recycler) {
    return Math.max(...this.maxScrollHeightOfColumns);
  }

  getData(index, recycler) {
    return this.data[index];
  }

  getLength(recycler) {
    return this.data.length;
  }

  getOffset(index, recycler) {
    const position = this.positions[index];
    return {
      y: 0,
      x: `${position.column * 100}%`
    };
  }

  getColumn(index, recycler) {
    return this.positions[index].column;
  }

  fetch() {
    const newData = [];
    const { data } = this;
    const initialNum = (data[data.length - 1] || {}).num || 0;

    for (let i = 0; i < this.countPerPage; i++) {
      newData.push({
        num: i + initialNum,
        height: Math.floor(Math.random() * 300) + 100
      });
    }

    this.recordPositions(newData);
    this.data = this.data.concat(newData);

    return true;
  }

  recordPositions(additionalData) {
    const { positions } = this;

    for (const data of additionalData) {
      const minScrollHeight = Math.min(...this.maxScrollHeightOfColumns);
      const index = this.maxScrollHeightOfColumns.indexOf(minScrollHeight);
      const scrollHeight = minScrollHeight + data.height;

      positions.push({
        scrollHeight,
        column: index
      });

      this.maxScrollHeightOfColumns[index] = scrollHeight;
    }
  }
}

export default function getWaterfallRecycler(scroller, container) {
  return new Recycler(scroller, new WaterfallSource(), {
    container,
    renderer: new NumberRenderer()
  });
}
