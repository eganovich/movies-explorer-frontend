import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';



function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  
  return (
    <Route exact path="/">
          <Main loggedIn={loggedIn} />
    </Route>
  );
}

export default App;
