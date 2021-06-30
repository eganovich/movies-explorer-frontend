import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';



function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  
  return (
    <Switch>
    <Route exact path="/">
          <Main loggedIn={loggedIn} />
    </Route>
    <Route exact path="/signup">
    <Register/>
    </Route>
    <Route exact path="/signin">
          <Login/>
        </Route>  
        <Route path="/">
          <NotFound />
        </Route>    
  </Switch>
  );
}

export default App;
