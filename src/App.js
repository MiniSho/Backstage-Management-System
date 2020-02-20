/*
应用根组件
*/

import React,{Component} from 'react'
import { message} from 'antd'
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom"

import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'

class App extends Component{

    handleClick = () => {
        message.success('成功啦...');
    }

    render() {
        return (
          <BrowserRouter>
            <Switch> 
              {/* /login */}
              <Route path="/login" component={Login} />
              <Route path="/" component={Admin} />
            </Switch>
          </BrowserRouter>
        )
      }
}

export default App