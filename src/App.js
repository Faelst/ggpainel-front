import Panel from './views/Panel/Panel'
import Login from './views/Login/Login'
import Tournament from './views/Tournament/Tournament'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/panel" component={Panel} />   
        <Route path="/tournament" component={Tournament} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
