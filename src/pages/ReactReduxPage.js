import React,{Component} from 'react'
import {connect} from 'react-redux'
export default connect(
  state=>({num: state}),
  {
    add:()=>({type:'ADD'})
  }
)(
  class reactReduxPage extends Component{
    constructor(){
      super()
    }
    render(){
      console.log(this.props)
      const {num,dispatch,add} =this.props
      return(
        <div>
          <h3>reactReduxPage</h3>
          {/* <div onClick={()=>dispatch({type:'ADD'})}>{num}</div> */}
          <div onClick={add}>{num}</div>
        </div>
      )
    }
  }
)
