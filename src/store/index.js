import { createStore,applyMiddleware} from '../Myredux'
  // import {createStore, applyMiddleware} from 'redux' // applyMiddleware 使用中间件
  // import thunk from 'redux-thunk'
  // import logger from 'redux-logger'
  // import promise from 'redux-promise'
import isPromise from 'is-promise' //判断是不是promise类型
import {isFSA} from 'flux-standard-action' //判断是不是标准的action 有type，payload
// 定义state初始化和修改规则
function createReducer(store=1,{type,payload=1}){
  // type: action 的修改规则，用于switch判断
  // paylod，当发起dispatch传进来的参数
  console.log(store, 'store')
  switch (type) {
    case 'ADD': // 加法规则
        return store+payload
      break;
      case 'MINUS': // 减法规则
        return store-payload
      break;
    default: // 默认导出规则
        return store
      break;
  }

}

const store = createStore(createReducer, applyMiddleware(thunk, logger, promise)) // 定义store里面的修改规则

export default store

function thunk({dispatch, getState}){
  //thunk 里面首先执行的可能是一个dipatch，也有可能是一个function，所以在不确定的情况下，我们将它定义为next
  return next => action=>{
    // 第二种情况：是个回调函数
    // console.log(next,'next') // 前面聚合的函数，compose()的聚合出来的结果
    // console.log(action, 'action')
    if(typeof action === 'function'){
        return action(dispatch, getState)
    }

    //  第一种情况：如果传进来的是一个对象，那么就直接执行
    return next(action)
  }
}

function logger ({getState}){
  // 在这里也可以获取到dispatch的，但是用不到，我们只需要用到getState。
  // logger主要是打印：执行的方法，和oldstate 和 newstate
  return next=> action=>{
    console.log(next,'next')
    console.log('------------')
    const preState= getState()
    console.log('preState',preState)
    console.log('执行的方法：' ,action.type)
    const returnValue = next(action)
    const nextState = getState()
    console.log(nextState)
    console.log('------------')    
    return returnValue
  }
}
function promise({dispatch}){
  return next=>action=>{
    if(!isFSA(action)){ // 判断是不是标准的action
      // 再判断是不是标准的Promise? 是 执行.then 方法：不是就直接执行
      return isPromise(action)? action.then(dispatch):next(dispatch)
    }
    // 是promise
    // console.log(action)   -----{type: "MINUS", payload: 100}
    return isPromise(action.payload)?
    action.payload
    .then(res => dispatch({...action, payload:res}))
    .catch(error => {
        dispatch({...action, payload: error, error:true});
        return Promise.reject(error)
    })
    :next(dispatch)
  }
}
