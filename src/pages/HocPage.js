import React, {Component} from 'react'

// hoc 的含义 
// 参数是一个组建，返回是一个组建的函数为高阶组建

const foo=(Cmp)=>props=>{
return <div className="border">
    <Cmp {...props}/>
  </div>
}
// function Child(props){
//   return(
//     <div className="border">Child-{props.name}</div>
//   )
// }
// const Foo =foo(Child)
// 不建议包很多层
// const Foo =foo(foo(Child))
// @foo
class Child extends Component{
  render(){
    return(
      <div className="border">Child-{this.props.name}</div>
    )
  }
}

export default class HocPage extends Component{
  render(){
    return(
      <div>
        <h3>HocPage</h3>
        {/* <Foo name="参数"/> */}
        <Child name="新参数"/>
      </div>
    )
  }
}