import './styles/main.scss';

import getNormalRecycler from './recyclers/normal';
import getMultiColumnsRecycler from './recyclers/multicolumns';
import getWaterfallRecycler from './recyclers/waterfall';
import getHrWaterfallRecycler from './recyclers/hrwaterfall';
import getSpacePreservedRecycler from './recyclers/spacePreserved';

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
