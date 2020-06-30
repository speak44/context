import React,{Component} from 'react'
import store from '../store/'
export default class HomePage extends Component{
  constructor(props){
    super(props)
  }
  // componentDidMount(){
  //   store.subscribe(()=>{
  //     this.forceUpdate()
  //   })
  // }
  // 或者 在index.js中注册
  render(){
    console.log(store)
    return(
        <div>
          <h2>home</h2>
          <div>{store.getState()}</div>
          <button onClick={()=>store.dispatch({type:'ADD',num:'333'})}>add</button>
          </div>
    )
  }
}
