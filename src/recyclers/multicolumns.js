import { Recycler } from 'recycler-view';
import { NumberMultiColumnsRenderer, NumberSource } from './common';

class MultiColumnsSource extends NumberSource {
  getWidth(index, recycler) {
    return '33.33%';
  }

  getHeight(index, recycler) {
    return 150;
  }

  getData(index, recycler) {
    return this.data[index];
  }

  getScrollTop(index, recycler) {
    return Math.floor(index / 3) * this.getHeight(index);
  }

  getLength(recycler) {
    return this.data.length;
  }

  getMaxScrollHeight(recycler) {
    return Math.ceil(this.getLength()) * this.getHeight();
  }

  getOffset(index, recycler) {
    let column = index % 3;

    if (!column) {
      return { x: 0, y: 0 };
    }

    if (column === 1) {
      return { x: '100%', y: 0 };
    }

    return { x: '200%', y: 0 };
  }

  getColumn(index, recycler) {
    return index % 3;
  }
}

export default function getMultiColumnsRecycler(scroller, container) {
  return new Recycler(scroller, new MultiColumnsSource(), {
    container,
    renderer: new NumberMultiColumnsRenderer()
  });
}
