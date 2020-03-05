import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import login from './Component/login';
import Register from './Component/Register/Register';
import Admin from './Component/Admin/Admin';
import Flow from './Component/Flow/Flow';

class Parent extends Component {
  constructor(props) {
    super(props)
    if (window.performance) {
      if (performance.navigation.type == 1) {
        let currentpath = window.location.pathname.split('/');
        if (currentpath.length > 1) {
          window.location.pathname = '/';
        } else {
          window.location.pathname = `/${currentpath[1]}/`;
        }
      }
    }
  }

  render() {
    const pathName = window.location.pathname;
    return (
      <div className='Parent' style={{
        width: '100%',
        height: window.innerHeight - 16,
        position: 'relative',
        fontSize: '1.5rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
        overflow: 'hidden'
      }}>
        {/* <Start /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path={`${pathName}`} component={login} />
            <Route path={`${pathName}Register`} component={Register} />
            <Route path={`${pathName}Admin`} component={Admin} />
            <Route path={`${pathName}Flow`} component={Flow} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export { Parent };
