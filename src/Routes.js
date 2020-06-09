import React from 'react';
import {Route,HashRouter, Switch} from 'react-router-dom';
import {App} from './App';
import Gracias from './Gracias';

const Routes = ()=>{

  return(
   <HashRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/gracias" component={Gracias}/>
    </Switch>
   </HashRouter>
  )
}

export default Routes;
