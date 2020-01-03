import { Recycler } from 'recycler-view';
import { WaterfallSource } from './waterfall';
import { NormalSource } from './normal';
import { NumberRenderer } from './common';

class NormalRendererSource extends NormalSource {
  constructor() {
    super();
    this.renderer = new NumberRenderer();
  }

  getRenderer() {
    return this.renderer;
  }
}

class WaterfallRendererSource extends WaterfallSource {
  constructor() {
    super();
    this.renderer = new NumberRenderer();
  }

  getRenderer() {
    return this.renderer;
  }
}

export default function getMultiSourcesRecycler(scroller, container) {
  return new Recycler(
    scroller,
    [new NormalRendererSource(), new WaterfallRendererSource()],
    {
      container
    }
  );
}
