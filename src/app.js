import './styles/main.scss';

import getNormalRecycler from './recyclers/normal';
import getMultiColumnsRecycler from './recyclers/multiColumns';
import getWaterfallRecycler from './recyclers/waterfall';
import getHrWaterfallRecycler from './recyclers/hrWaterfall';
import getSpacePreservedRecycler from './recyclers/spacePreserved';
import getMultiSourcesRecycler from './recyclers/multiSources';

window.normalRecycler = getNormalRecycler(
  document.getElementById('normal'),
  document.getElementById('normal-container')
);

window.multiColunmnsRecycler = getMultiColumnsRecycler(
  document.getElementById('multicolumns'),
  document.getElementById('multicolumns-container')
);

window.waterfallRecycler = getWaterfallRecycler(
  document.getElementById('waterfall'),
  document.getElementById('waterfall-container')
);

window.hrWaterfallRecycler = getHrWaterfallRecycler(
  document.getElementById('hrwaterfall'),
  document.getElementById('hrwaterfall-container')
);

window.spacePreservedRecycler = getSpacePreservedRecycler(
  document.getElementById('space-preserved'),
  document.getElementById('space-preserved-container'),
  document.getElementById('space-preserved-footer')
);

window.multiSourcesRecycler = getMultiSourcesRecycler(
  document.getElementById('multisources'),
  document.getElementById('multisources-container')
);

document.getElementById('checkout-base').addEventListener('click', () => {
  window.multiSourcesRecycler.checkout(0);
});

document.getElementById('checkout-waterfall').addEventListener('click', () => {
  window.multiSourcesRecycler.checkout(1);
});
