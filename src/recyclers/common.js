import { Renderer, Source } from 'recycler-view';

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
    el.textContent = data.num;
  }
}

export class NumberSource extends Source {
  constructor(countPerPage) {
    super();
    this.countPerPage = countPerPage || 30;
    this.data = [];
  }

  async fetch() {
    const { data } = this;
    const initialNum = (data[data.length - 1] || {}).num || 0;

    for (let i = 0; i < this.countPerPage; i++) {
      data.push({
        num: i + initialNum
      });
    }

    return true;
  }
}
