import { Recycler } from 'recycler-view';
import { NumberRenderer, NumberSource } from './common';

export class MultiColumnsSource extends NumberSource {
  constructor(columns) {
    super();

    this.columns = columns || 3;
    this.width = `${(1 / this.columns) * 100}%`;

    this.init();
  }

  init() {
    this.fetch();
  }

  getWidth(index, recycler) {
    return this.width;
  }

  getHeight(index, recycler) {
    return 150;
  }

  getData(index, recycler) {
    return this.data[index];
  }

  getScrollTop(index, recycler) {
    return Math.floor(index / this.columns) * this.getHeight(index);
  }

  getLength(recycler) {
    return this.data.length;
  }

  getMaxScrollHeight(recycler) {
    return Math.ceil(this.getLength() / this.columns) * this.getHeight();
  }

  getOffset(index, recycler) {
    let column = index % this.columns;

    return {
      y: 0,
      x: `${column * 100}%`
    };
  }

  getColumn(index, recycler) {
    return index % this.columns;
  }
}

export default function getMultiColumnsRecycler(scroller, container) {
  return new Recycler(scroller, new MultiColumnsSource(), {
    container,
    renderer: new NumberRenderer()
  });
}
