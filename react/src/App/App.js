// messy imports
import React from 'react';
import { 
  BrowserRouter,
  Route, 
  Switch as RouterSwitch
} from 'react-router-dom';

// component imports
import ForDemo from './ForDemo'
import NavBar from '../Common/NavBar/NavBar'
import * as Routes from '../Routes/Routes'
import PrivateRoute from './PrivateRoute'

// material ui
import useStyles from './App.style';
import { Button } from '@material-ui/core';

import { useAuth } from '../Context/authContext'


const App = (props) => {
  const classes = useStyles();

  // use auth context 
  // see provider in AppWrapper
  const { 
    setAuthTokens,
    loggedIn, setLoggedIn 
  } = useAuth();

  // demo nonsense
  const { 
    admin, toggleAdmin,
    demoBorder, toggleBorder
  } = props.thing;

  // OK neet to set Logged in state in Login.js
  function logOut() {
    setAuthTokens(null);
    setLoggedIn(null);
  }
  // move this to NAV

  return (
    <BrowserRouter>
        <NavBar authState={loggedIn} />
        <div className={classes.offset}></div>

        {/* move this to NAV */}
        <Button variant="contained" color="primary" onClick={logOut}> LOG OUT</Button>

        {/* to remove later */}
        { demoBorder ?
        <>
          <Button variant="contained" color="secondary" onClick={toggleBorder}>CLOSE</Button>
          <ForDemo authState={ admin } switchChange={toggleAdmin}/>
        </>
        :
        <></>
        }

        {/* ------------------------------------- */}

        {/* delet DemoThing later thing later */}
        <div className={demoBorder ? classes.borderThing : null}>
        {/* <div> */}
        <RouterSwitch>
          {/* setup isLoggedin bool for this to redirect to kennel if logged in */}
          <Route exact path='/' component={() => <Routes.Home loggedIn={loggedIn} />} />
          <Route path='/login' component={Routes.Login} />
          <Route path='/register' component={Routes.Register} />
          
          {/* only logged in users can see these */}
          <PrivateRoute path='/myacc' component={Routes.AccountMan} />
          <PrivateRoute path='/myacc/mypack' component={Routes.DogMan} />
          <PrivateRoute path='/kennel' component={Routes.Kennel} /> {/* might be removed/ combine with home */}
          <PrivateRoute path='/date' component={Routes.Dates} />
          <PrivateRoute path='/date/id' component={Routes.RateDate} />
          <PrivateRoute path='/admin' component={Routes.AdminHome} />

          <Route component={Routes.NotFound} />
        </RouterSwitch>
        </div>

        <p>Footer component</p>
    </BrowserRouter>
  )
};


export default App;