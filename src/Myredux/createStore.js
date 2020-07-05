export default function createStore (reducer, enhancer){
  // enhancer 加强版
  // 主要就是加强dispatch
  if(enhancer){ // 首先判断 有没有 传入这个 redux使用中间件的方法
    // 如果存在
    // 首先我们要明确，中间件其实是对dispatch进行了加强，所以还是需要用到createStore，对它进行处理；dispatch还是会用到reducer这个参数。
    // dispatch二次包装
     return enhancer(createStore)(reducer) //返回一个加强版的store
  }

  // console.log(reducer,'reducer')
    
  // 内部定义state初始值，
  let currentState;
  // 所有的监听记录下来做一个数组
  let currentListeners = []

  // getState：返回当前的state
  function getState(){
    return currentState
  }
  // dispatch 接收一个action: {type:'ADD', payload:''},改变 state
  function dispatch(action){
    // 调用传进来的 reducer方法，获取到更新后的newstate
    currentState = reducer(currentState,action)
    // 当数据修改完了之后，去发布订阅
    // 将监听里面的事件做一次执行
    currentListeners.forEach(lister=>lister())
  }
  // subscribe 接收一个监听函数lister，监听肯定是存在多个
  function subscribe(lister){
    // 每加进来一个lister，就push进去currentListeners
    currentListeners.push(lister)
    // 返回一个取消订阅的方法
    // 最粗暴的方法就是，将currentListeners置空，当然你也可以选择用filter找到当前的订阅，之后进行删除
    return ()=> {currentListeners=[]}
  }
   dispatch({type:'AAAASAJKHSDFH'})
  return{
    // 获取state
    getState,
    // dispatch
    dispatch,
    // 订阅事件
    subscribe
  }
}