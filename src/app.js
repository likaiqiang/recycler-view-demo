import './styles/main.scss';

import getNormalRecycler from './recyclers/normal';
import getMultiColumnsRecycler from './recyclers/multicolumns';

getNormalRecycler(
  document.getElementById('normal'),
  document.getElementById('normal-container')
);

getMultiColumnsRecycler(
  document.getElementById('multicolumns'),
  document.getElementById('multicolumns-container')
);
