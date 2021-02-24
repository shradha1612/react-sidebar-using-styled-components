import React from 'react'
import * as s from './App.styles'

//components
import Sidebar from './components/Sidebar/Sidebar'
import MainView from './components/MainView/Services/MainView';


const GlobalSidebar=()=> {
const sidebarHeader ='Expense tracker';
const menuItems= [
    {name:'Dashboard', to:'/', icon:'', subMenuItems:[] },
    {name:'About', to:'/about', icon:'', subMenuItems:[] },
    {name:'Transactions', to:'/transactions', icon:'', subMenuItems:[] },
    {name:'Services', to:'/services', icon:'', subMenuItems:[] },
    {name:'Notes', to:'/notes', icon:'', subMenuItems:[] },   
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
