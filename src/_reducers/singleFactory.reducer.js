import { userConstants } from '../_constants';

export function singleFactory(state = {}, action) {
  switch (action.type) {
    case userConstants.GETONE_FACTORY_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETONE_FACTORY_SUCCESS:
      return {
        items: action.singleFactory
      };
    case userConstants.GETONE_FACTORY_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}