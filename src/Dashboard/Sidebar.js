import React from 'react'
import '../App.css';
import './sidebar.css';

import budget from '../assets/budget.png'
import dashboard from '../assets/dashboard.png'
import avatar from '../assets/avatar.png'
import { Dashboard } from './views/Dashboard';
export const Sidebar = () => {
    return (
        <>
        
        <div className="sidebar">
            <div className="Expense">
                <h2><span><img src={budget} alt="budget"/></span>Expense tracker</h2>
                <span></span>
            </div>
            <div className="sidebar-menu">
                <ui>
                    <li>
                        <a href="" className="active"><span><img src={dashboard} alt="dashboard" style={{height:"30px"}}/><span>Dashboard</span></span></a>
                    </li>
                    <li>
                        <a href=""><span><img src={dashboard} alt="dashboard" style={{height:"30px"}}/><span>Transactions</span></span></a>
                    </li>

                    <li>
                        <a href=""><span><img src={dashboard} alt="dashboard" style={{height:"30px"}}/><span>Make plan</span></span></a>
                    </li>
                    <li>
                        <a href=""><span><img src={dashboard} alt="dashboard" style={{height:"30px"}}/><span>Notes</span></span></a>
                    </li>                
                </ui>

            </div>
            
        </div>
        <div className="content">
            <header>
                <h2>
                    Dashboard
                </h2>


                <div className="user">
<img src={avatar} alt="avatar"/>
                
<h4>user name</h4>
<h3>Logout</h3>

                </div>
            </header>
            <main>
                <Dashboard/>
            </main>

        </div>
        </>
    )
       
}
