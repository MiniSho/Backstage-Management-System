/*
应用根组件
*/

import React,{Component} from 'react'
import { message} from 'antd'
import { BrowserRouter,  Switch, Route, Redirect } from "react-router-dom"

import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'
import Homepage from './pages/homepage/homepage.jsx'

class App extends Component{

    handleClick = () => {
        message.success('成功啦...');
    }

    render() {
        return (
          <BrowserRouter>
            <Switch> 
              
              <Route path="/login"  component={Login} />
              <Route path="/admin"  component={Admin} />
              <Route path="/" exact component= {Homepage}/>
              <Redirect to='/' />
            </Switch>
          </BrowserRouter>
        )
      }
}



export default App


