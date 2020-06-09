import React from 'react';
import {Route,BrowserRouter, Switch} from 'react-router-dom';
import {App} from './App';
import Gracias from './Gracias';

const Routes = ()=>{

  return(
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/gracias" component={Gracias}/>
    </Switch>
   </BrowserRouter>
  )
}

export default Routes;
