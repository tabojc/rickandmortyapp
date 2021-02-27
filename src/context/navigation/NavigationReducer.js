import {
  SIDEBAR_SHOW,
  SIDEBAR_HIDE,
  GET_NAVBAR,
  SET_NAVBAR,
} from 'context/types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SIDEBAR_SHOW:
      return {
        ...state,
        sidebarShown: true
      };
      break;
    case SIDEBAR_HIDE:
      return {
        ...state,
        sidebarShown: false
      };
      break;
    case GET_NAVBAR:
        return state;
      break;
    case SET_NAVBAR:
    return {
      ...state,
      selectedNavbar: payload
    };
      break;
    default:
      return state;
  }
}
