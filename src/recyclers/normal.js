import { Recycler } from 'recycler-view';
import { NumberRenderer, NumberSource } from './common';

class NormalSource extends NumberSource {
  constructor(props) {
    super(props);

    this.fetch();
  }

  getWidth(index, recycler) {
    return '100%';
  }

  getHeight(index, recycler) {
    return 150;
  }

  getData(index, recycler) {
    return this.data[index];
  }

  getScrollTop(index, recycler) {
    return index * this.getHeight(index);
  }

  getLength(recycler) {
    return this.data.length;
  }

  getMaxScrollHeight(recycler) {
    return this.getLength() * this.getHeight();
  }
}

export default function getNormalRecycler(scroller, container) {
  return new Recycler(scroller, new NormalSource(), {
    container,
    renderer: new NumberRenderer()
  });
}
