import Panel from './views/Panel/Panel'
import Login from './views/Login/Login'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/panel" component={Panel} />   
      </Switch>
    </BrowserRouter>
  );
}

export default App;
