import { Recycler } from 'recycler-view';
import { NumberRenderer, NumberSource } from './common';

class MultiColumnsSource extends NumberSource {
  constructor() {
    super();

    this.columns = 3;
    this.width = `${(1 / this.columns) * 100}%`;

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

    if (!column) {
      return { x: 0, y: 0 };
    }

    if (column === 1) {
      return { x: '100%', y: 0 };
    }

    return { x: '200%', y: 0 };
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
