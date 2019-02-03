import { userConstants } from '../_constants';

export function markets(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_MARKET_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_MARKET_SUCCESS:
      return {
        items: action.markets
      };
    case userConstants.GETALL_MARKET_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}