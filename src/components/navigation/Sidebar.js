import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import "./sidebar.css";
import NavigationContext from 'context/navigation/NavigationContext';

function Sidebar() {
  const { selectedNavbar, sidebarShown } = useContext(NavigationContext);

  const getClass = ( current, selected ) => {
    return current === selected?
      'sidebar__menu--active': 'sidebar__menu--default';
  }

  return (
    <>
      {sidebarShown ? (
        <div className="sidebar">
          <List disablePadding dense>
            <ListItem button>
              <ListItemText
                className={getClass('Protagonistas', selectedNavbar)}
              >
                Protagonistas
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText
                className={getClass('Lugares', selectedNavbar)}
              >
                Lugares
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText
               className={getClass('Episodios', selectedNavbar)}
              >Episodios</ListItemText>
            </ListItem>
          </List>
        </div>
      ): null}
    </>
  );
}

export default Sidebar;
