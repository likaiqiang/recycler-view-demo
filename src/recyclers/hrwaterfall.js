import { Recycler } from 'recycler-view';
import { NumberRenderer, NumberSource } from './common';

class HrWaterfallSource extends NumberSource {
  constructor() {
    super();

    this.currentScrollHeight = 0;
    this.currentColumn = 0;
    this.widthAcc = 0;

    this.fetch();
  }

  getWidth(index, recycler) {
    return `${this.getData(index).width * 100}%`;
  }

  getHeight(index, recycler) {
    return 150;
  }

  getData(index, recycler) {
    return this.data[index];
  }

  getScrollTop(index, recycler) {
    return this.getData(index).scrollHeight - this.getHeight(index);
  }

  getLength(recycler) {
    return this.data.length;
  }

  getMaxScrollHeight(recycler) {
    return this.getLength() * this.getHeight();
  }

  getOffset(index, recycler) {
    const data = this.getData(index);

    return {
      y: 0,
      x: `${(this.getLeftSpace(index) / data.width) * 100}%`
    };
  }

  getLeftSpace(index) {
    const data = this.getData(index);
    let leftSpace = 0;
    let i = index - 1;
    let lastData = this.getData(i);

    while ((lastData || {}).scrollHeight === data.scrollHeight) {
      leftSpace += lastData.width;
      lastData = this.getData(--i);
    }

    return leftSpace;
  }

  recordPosition(newData) {
    for (const data of newData) {
      if (!this.widthAcc || this.widthAcc >= 1) {
        this.currentScrollHeight += this.getHeight();
        this.widthAcc = 0;
        this.currentColumn = 0;
      }

      data.column = this.currentColumn;
      data.scrollHeight = this.currentScrollHeight;
      this.widthAcc += data.width;
      this.currentColumn += 1;
    }
  }

  fetch() {
    const { countPerPage, data } = this;
    const initialNum = (data[data.length - 1] || {}).num || 0;
    const newData = [];

    for (let i = 0; i < countPerPage; i++) {
      const countPerRow = Math.min(
        Math.round(Math.random() * 2) + 1,
        countPerPage - i
      );
      const percentages = this.randomWidth(countPerRow);

      for (let j = 0; j < countPerRow; j++) {
        newData.push({
          num: initialNum + i + j,
          width: percentages[j]
        });
      }

      i += countPerRow - 1;
    }

    this.recordPosition(newData);
    this.data = this.data.concat(newData);

    return true;
  }

  randomWidth(count) {
    let total = 1;
    let percentages = [];

    for (let i = 0; i < count; i++) {
      let taken;

      if (i + 1 === count) {
        percentages.push(total);
        break;
      }

      taken = Math.random() * total;
      total = total - taken;
      percentages.push(taken);
    }

    return percentages;
  }
}

export default function getHrWaterfallRecycler(scroller, container) {
  return new Recycler(scroller, new HrWaterfallSource(), {
    container,
    renderer: new NumberRenderer()
  });
}
