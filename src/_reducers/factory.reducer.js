import { userConstants } from '../_constants';

export function factory(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_FACTORY_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_FACTORY_SUCCESS:
      return {
        items: action.factory
      };
    case userConstants.GETALL_FACTORY_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}