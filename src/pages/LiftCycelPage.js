import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class LiftCycePage extends Component{
  constructor(){
    super()
    this.state={
      num:0
    }
    console.log('执行顺序打印————————constructor——————————')
  }
  static defaultProps ={
    msg:'name'
  }
  static propTypes={
    msg: PropTypes.string.isRequired
  }
  UNSAFE_componentWillMount (){
    console.log('执行顺序打印————————componentWillMount——————————')
  }
  componentDidMount(){
    console.log('执行顺序打印————————componentDidMount——————————')
  }
  shouldComponentUpdate(nextprops,nextstate){
    const {num} =nextstate
    console.log('执行顺序打印————————shouldComponentUpdate——————————')
    console.log(nextstate,'nextstate')
    return num!==3
  }
  componentWillUpdate(){
    console.log('执行顺序打印————————componentWillUpdate——————————')
  }
  componentDidUpdate(){
    console.log('执行顺序打印————————componentDidUpdate——————————')
  }
  changenum=()=>{
    this.setState({
      num:this.state.num+1
    })
  }
  render(){
    const {msg} = this.props
    const {num} = this.state
    console.log('执行顺序打印————————render——————————')
    return(
      <div>
        <h4>LiftCycePage</h4>
        <p>{msg}</p>
        <button onClick={this.changenum}>{num}</button>
        {/* {num%2?<Child num={num}/>:''} */}
          <Child num={num}/>
      </div>
    )
  }
}

class Child extends Component{
  componentWillReceiveProps(newprops){
    // 父组穿进来的参数改变就执行
    console.log('执行顺序打印————————child-componentWillReceiveProps————————')
    console.log('child-newprops',newprops)
  }
  componentWillUnmount(){
    console.log('执行顺序打印————————child-componentWillUnmount————————')
  }
  render(){
    const {num} = this.props
    return(
      <div>child-----{num}</div>
    )
  }
}