import React from 'react';
import { NavLink,Route,Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Cars from './Cars';

const App = (props) => {
  console.log('props in app=',props)
return(
  <>
  <Router>
  <NavLink  to='/'>Home</NavLink>
  <NavLink  to='/app'>App</NavLink>
 
 <Switch> 
 
 <Route path='/app'> 
 <Cars/>
 </Route>

 <Route path='/'> 
 <Home/>
 </Route>
 
 </Switch>
 </Router> 
 </>
)
}
  export default App;