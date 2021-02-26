import React, { useReducer } from 'react';
import NavigationReducer from 'context/navigation/NavigationReducer';
import NavigationContext from 'context/navigation/NavigationContext';

const NavigationState = (props) => {
  const initialState = {
    selectedNavbar: '',
    sidebarShown: false,
  }

  const [state, dispatch] = useReducer(NavigationReducer, initialState);

  function toggleSidebar() {

  }
  return (
    <NavigationContext.Provider value={{
      selectedNavbar: state.selectedNavbar,
      sidebarShown: state.sidebarShown,
    }}>
      {props.children}
    </NavigationContext.Provider>
  );
}

export default NavigationState;
