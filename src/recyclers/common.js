import { Renderer, Source } from 'recycler-view/dist';

export class NumberRenderer extends Renderer {
  createElement(data) {
    const el = document.createElement('div');
    el.classList.add(
      'recycler-item',
      'flex-box',
      'flex-center-center',
      'num-recycler-item'
    );
    return el;
  }

  update(el, data, recycler) {
    el.textContent = data;
  }
}

export class NumberMultiColumnsRenderer extends NumberRenderer {
  createElement(data) {
    const el = super.createElement(data);
    el.classList.add('multi-columns-recycler-item');
    return el;
  }
}

export class NumberSource extends Source {
  constructor(countPerPage) {
    super();
    this.countPerPage = countPerPage || 30;
    this.data = [];

    this.fetch();
  }

  fetch() {
    const { data } = this;
    const initialNum = data[data.length - 1] || 0;

    for (let i = 0; i < this.countPerPage; i++) {
      data.push(i + initialNum);
    }

    return true;
  }
}
