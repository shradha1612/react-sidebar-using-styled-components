import React,{useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import * as s from './Sidebar.styles'
// import {budget} from ''
const Sidebar = (props) => {
    const {
        sidebarHeader = '',
        menuItems = []   //giving default values to props .....so that if we forgot to pass prop application won't be crash
    } = props;
//state
    const [selected , setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    //const [header, setHeader] = useState(sidebarHeader.fullName);

//Effect //since we have to see the change
// useEffect(() => {
//     isSidebarOpen ? setHeader(sidebarHeader.fullName) : setHeader(sidebarHeader.shortName);
// }, [isSidebarOpen ,sidebarHeader]) 
  //that means wheneven isSidebarOpen changes our effect will be triggerd 
//value of state is used here therefore must be passed as dependency
//first property is callback or  'effect' or deesired result 
//if second parameter ,[] is empty then our effect will only trigger once when sidebar components renders
//if we put propertie or something inside [] then everty time something will update and useeffect will be triggered
//https://dev.to/nibble/what-is-useeffect-hook-and-how-do-you-use-it-1p9c



//Effect --> Update on sidebar state
//https://usehooks.com/useWindowSize/
useEffect(()=> {
    const updateWindowWidth = () => {
        console.log(`window width: ${window.innerWidth}`)
        if(window.innerWidth < 1280 && isSidebarOpen) setSidebarState(false);
           else setSidebarState(true)
    }
    //add event listener
    window.addEventListener('resize',updateWindowWidth);
    // Remove event listener on cleanup
        return () => window.removeEventListener('resize',updateWindowWidth) 
}, [isSidebarOpen])  //passing dependency in []

// // //useEffect
// useEffect(()=>{
//     const  =()=>{
//         if(window.innerWidth < 400 && isSidebarOpen) setSidebarState(false)
//         else setSidebarState(true) 
//     } 
//     window.addEventListener('resize',updateWindowWidth);
//     return()=> window.removeEventListener('resize',updateWindowWidth)
// },[isSidebarOpen])

// const toggleinMobile = ()=>{
//     if(window.innerWidth < 400 && isSidebarOpen) setSidebarState(true)
//     else setSidebarState(false)
// }

const toggleInMobile =()=>{
    if(window.innerWidth < 400) setSidebarState(!isSidebarOpen)
    else setSidebarState(isSidebarOpen)
}

    const handleMenuItemClick = name =>{
        setSelectedMenuItem(name)
    }

    const menuItemsJSX = menuItems.map((item, index) => {

        //decide which one to apper when reload ...like here dashboard
        const isItemSelected = selected === item.name;
        console.log(`${item.name} selected ${isItemSelected}`)

        return (
            <Link to={item.to} style={{textDecoration:'none'}}>
            <s.MenuItem 
            key={index}
            selected={isItemSelected}
            onClick={()=> handleMenuItemClick(item.name)}
            isSidebarOpen={isSidebarOpen}
            onClick={()=>toggleInMobile()}
            >
                {/* for img right src={} or it will show err */}
                <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon}/>  
                <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
            </s.MenuItem>
            </Link>
            
        )
    });

    console.log(`is sidebar open ${isSidebarOpen}`)

    return(
        <s.SidebarContainer isSidebarOpen={isSidebarOpen} >
            <s.SidebarHeader><span><img src='./assets/budget.png' alt="budget"/></span>
            <s.sidebarHeaderText isSidebarOpen={isSidebarOpen}>
            {sidebarHeader}
            </s.sidebarHeaderText>
            </s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            {/* setSidebar(!isSidebarOpen) true is current state and '!' will toggle */}
            <s.TogglerContainer onClick={()=>setSidebarState(!isSidebarOpen)}>  
                <s.Toggler/>
            </s.TogglerContainer>
        </s.SidebarContainer>
    )
}
export default Sidebar;
