import React,{useState } from 'react'
import * as s from './Sidebar.styles'

const Sidebar = (props) => {
    const {
        sidebarHeader='',
        menuItems = []   //giving default values to props .....so that if we forgot to pass prop application won't be crash
    } = props;

//state
    const [selected , setSelectedMenuItem] = useState(menuItems[0].name)
    const [isSidebarOpen, setSidebarState] = useState(true)

    const handleMenuItemClick = name =>{
        setSelectedMenuItem(name)
    }

    const menuItemsJSX = menuItems.map((item, index) => {

        //decide which one to apper when reload ...like here dashboard
        const isItemSelected = selected === item.name;
        console.log(`${item.name} selected ${isItemSelected}`)

        return (
            <s.MenuItem 
            key={index}
            selected={isItemSelected}
            onClick={()=> handleMenuItemClick(item.name)}
            >
                {/* for img right src={} or it will show err */}
                <s.Icon src={item.icon}/>  
                <s.Text>{item.name}</s.Text>
            </s.MenuItem>
        )
    });

    console.log(`is sidebar open ${isSidebarOpen}`)

    return(
        <s.SidebarContainer isSidebarOpen={isSidebarOpen}>
            <s.SidebarHeader>{sidebarHeader}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.TogglerContainer onClick={()=>setSidebarState(!isSidebarOpen)}>
                <s.Toggler/>
            </s.TogglerContainer>
        </s.SidebarContainer>
    )
}
export default Sidebar;
