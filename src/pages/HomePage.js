import React,{Component} from 'react'
import store from '../store/'
export default class HomePage extends Component{
  constructor(props){
    super(props)
    this.state={
      oyy:'sdsds'
    }
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.forceUpdate()
    })
  }
  componentWillUnmount(){
    if(this.unsubscribe){
      this.unsubscribe()
    }
  }
  // this.forceUpdate() 执行的时候。shouldComponentUpdate不执行 ，componentDidUpdate执行
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }
  componentDidUpdate(){
    console.log('componentDidUpdate执行了吗')
  }
  oyychange=()=>{
    this.setState({
      oyy:'rere'
    })
  }

  

  // 或者 在index.js中注册dsfsfsfs
  render(){
    // console.log(store)
    return(
        <div>
          <h2>home</h2>
          <div>{store.getState()}</div>
          <button onClick={()=>store.dispatch({type:'ADD'})}>add</button>
          <div onClick={this.oyychange}>{this.state.oyy}</div>
          </div>
    )
  }
}
