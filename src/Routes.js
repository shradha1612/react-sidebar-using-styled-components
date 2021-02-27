import React from 'react'
import {Switch, Route} from 'react-router-dom';
import { About } from './components/MainView/About/About';
import { Dashboard } from './components/MainView/Dashboard/Dashboard';
import { Notes } from './components/MainView/Notes/Notes';
import { Transactions } from './components/MainView/Transactions/Transactions';

const Routes = () => {
    return (
        <Switch>
<Route exact path='/' component={Dashboard}/>
<Route path='/about' component={About}/>
<Route path='/notes' component={Notes}/>
<Route path='/transactions' component={Transactions}/>

        </Switch>
        
    )
}
export default Routes;