import { Recycler } from 'recycler-view';
import { NumberRenderer } from './common';
import { MultiColumnsSource } from './multiColumns';

class DoubleColumnsSource extends MultiColumnsSource {
  constructor() {
    super(2);
  }

  init() {
    super.fetch();
  }

  getHeight(index, recycler) {
    return 300;
  }

  fetch() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    }).then(() => {
      super.fetch();
      return true;
    });
  }
}

function resetFooterStyle(footer, recycler) {
  footer.style.transform = `translate(0, ${recycler.getMaxScrollHeight() -
    recycler.bottomPreserved}px)`;
}

export default function getSpacePreservedRecycler(scroller, container, footer) {
  const bottomPreserved = 50;
  const recycler = new Recycler(scroller, new DoubleColumnsSource(), {
    container,
    renderer: new NumberRenderer(),
    topPreserved: 120,
    bottomPreserved
  });

  footer.textContent = 'loading...';
  recycler.on(Recycler.Events.Update, () => resetFooterStyle(footer, recycler));
  resetFooterStyle(footer, recycler);

  return recycler;
}
