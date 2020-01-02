import './styles/main.scss';

import getNormalRecycler from './recyclers/normal';
import getMultiColumnsRecycler from './recyclers/multicolumns';
import getWaterfallRecycler from './recyclers/waterfall';

getNormalRecycler(
  document.getElementById('normal'),
  document.getElementById('normal-container')
);

getMultiColumnsRecycler(
  document.getElementById('multicolumns'),
  document.getElementById('multicolumns-container')
);

window.waterfall = getWaterfallRecycler(
  document.getElementById('waterfall'),
  document.getElementById('waterfall-container')
);
