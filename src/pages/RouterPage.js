import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
export default class RouterPage extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p >RouterPage</p>
        
        <Router>
          <Link to="/">首页</Link>
          <span className="pad"></span>
          <Link to="/user">用户中心</Link>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/user" component={UserPage}/>
            <Route component={EmptyPage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

class HomePage extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p >HomePage</p>
      </div>
    )
  }
}
class UserPage extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p >UserPage</p>
      </div>
    )
  }
}
class EmptyPage extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p >404页面</p>
      </div>
    )
  }
}