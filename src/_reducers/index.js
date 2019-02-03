import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { markets } from './markets.reducer';
import { alert } from './alert.reducer';
import { factory } from './factory.reducer';
import { singleFactory } from './singleFactory.reducer';

const rootReducer = combineReducers({
  authentication,
  markets,
  alert,
  factory,
  singleFactory
});

export default rootReducer;