import React from 'react'
import * as s from './Sidebar.styles'

const Sidebar = (props) => {
    const {
        sidebarHeader='',
        menuItems =[]   //giving default values to props .....so that if we forgot to  pass prop application won't be crash
    } = props;

    
    const menuItemsJSX = menuItems.map((item, index) => {
        return (
            <s.MenuItem key={index}>{item.name}</s.MenuItem>
        )
    })


    return(
        <s.SidebarContainer>
            <s.SidebarHeader>{sidebarHeader}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        </s.SidebarContainer>
    )
}
export default Sidebar;
