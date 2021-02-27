import React from 'react'
import * as s from './App.styles'

//components
import Sidebar from './components/Sidebar/Sidebar'
import MainView from './components/MainView/Services/MainView';

const GlobalSidebar=()=> {
//we can hardcode it too but i want to make it completely reusabe 
const sidebarHeader ='Expense';
const menuItems= [
    {name:'Dashboard', to:'/', icon:'assets/budget.png', subMenuItems:[] },
    {name:'About', to:'/about', icon:'assets/dashboard.png', subMenuItems:[] },
    {name:'Transaction', to:'/transactions', icon:'assets/menu.png', subMenuItems:[] },
    {name:'Services', to:'/services', icon:'assets/dashboard.png', subMenuItems:[] },
    {name:'Notes', to:'/notes', icon:'assets/dashboard.png', subMenuItems:[] },   
]
    return(
        <s.App>
            <Sidebar
            sidebarHeader={sidebarHeader}  //passing as props
            menuItems={menuItems}   
            />
            <MainView/>
        </s.App>
    )
}
export default GlobalSidebar;
