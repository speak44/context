import React, {Component} from 'react'
import store from "../store/index";
export default class ReaduxPage extends Component{
  constructor(){
    super()
  }
  // 在组建挂载完成这个组建中
  componentDidMount(){
    // 当store中数据发生改变时，发起订阅。
    this.unsubscribe = store.subscribe(()=>{
      // 在数据发生改变的时候，强制页面渲染
      this.forceUpdate()

    })
  }
  // 在组建销毁的时候
  componentWillUnmount(){
    // 如果有订阅
    if(this.unsubscribe){
      // 执行取消订阅
      this.unsubscribe()
    }
  }


  add=()=>{
    store.dispatch({type:'ADD', payload:100})
  }
  // Asyadd=()=>{
  //   store.dispatch(()=>{
  //     setTimeout(() => {
  //       store.dispatch({type: 'ADD'})
  //     }, 1000);
  //   })
  // }
  // 改写
  Asyadd=()=>{
    store.dispatch((dispatch, getState)=>{
      setTimeout(() => {
        dispatch({type: 'ADD'})
      }, 1000);
    })
  }
  promiseMinus=()=>{
    store.dispatch(
      Promise.resolve({
        // 减法
        type:'MINUS',
        payload:100
      })
    )
  }
  render(){
    return(
      <div>
        <h3>
          ReaduxPage
        </h3>
        <div>
          获取到store里面设置的state
          <p>{store.getState()}</p>
        </div>
        点击按钮，触发dispatch
        {/* <button onClick={()=>store.dispatch({type:'ADD'})}>
          点击增加
        </button> */}
        <div>
          <button onClick={this.add}>
            点击增加
          </button>
          <button onClick={this.Asyadd}>
            点击增加
          </button>
          <button onClick={this.promiseMinus}>
            promise点击
          </button>
        </div>

      </div>
    )
  }
}