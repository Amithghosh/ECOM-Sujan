import React, {Component,Fragment} from 'react';
import {Button} from "react-bootstrap";
import AppRoute from "./route/AppRoute";
import {HashRouter} from "react-router-dom";

class App extends Component {
  render(){
    return(
        <Fragment>
            <HashRouter>
                <AppRoute/>
            </HashRouter>
        </Fragment>
    );
  }
}
 export default App;