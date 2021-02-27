import React, { useReducer } from 'react';
import NavigationReducer from 'context/navigation/NavigationReducer';
import NavigationContext from 'context/navigation/NavigationContext';

const NavigationState = (props) => {
  const initialState = {
    selectedNavbar: '',
    sidebarShown: false,
  }

  const [state, dispatch] = useReducer(NavigationReducer, initialState);

  function toggleSidebar(show) {
    console.log(`toggleSidebar(${show})`);
    if (show) {
      dispatch({ type: 'SIDEBAR_SHOW' });
    } else {
      dispatch({ type: 'SIDEBAR_HIDE' });
    }
  }

  function getSelectedNavbar() {
    dispatch({
      type: 'GET_NAVBAR',
    });
  }

  function setSelectedNavbar(payload) {
    dispatch({
      type: 'SET_NAVBAR',
      payload: payload
    });
  }

  return (
    <NavigationContext.Provider value={{
      selectedNavbar: state.selectedNavbar,
      sidebarShown: state.sidebarShown,
      toggleSidebar,
      setSelectedNavbar
    }}>
      {props.children}
    </NavigationContext.Provider>
  );
}

export default NavigationState;
