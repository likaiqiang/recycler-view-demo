import './styles/main.scss';

import getNormalRecycler from './recyclers/normal';
import getMultiColumnsRecycler from './recyclers/multicolumns';
import getWaterfallRecycler from './recyclers/waterfall';
import getHrWaterfallRecycler from './recyclers/hrwaterfall';

getNormalRecycler(
  document.getElementById('normal'),
  document.getElementById('normal-container')
);

getMultiColumnsRecycler(
  document.getElementById('multicolumns'),
  document.getElementById('multicolumns-container')
);

getWaterfallRecycler(
  document.getElementById('waterfall'),
  document.getElementById('waterfall-container')
);

getHrWaterfallRecycler(
  document.getElementById('hrwaterfall'),
  document.getElementById('hrwaterfall-container')
);
