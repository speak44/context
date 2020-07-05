export default function applyMiddleware(...middleware){
  // ...middleware 接收的参数，就是中间件

  // 1.首先明确返回值 是一个函数，因为我们需要获取到createStore里面的dispatch
  return createStore=>reducer=>{ // 双箭头函数，就是少了一层return包裹，可以看下ES6

    // 返回store
    let store = createStore(reducer)
    // 获取到当前的dispatch,原版的dispatch
    let dispatch =store.dispatch


    // 3.来写一个加强的dispatch
    // 最终的目的还是要获取到type，更新state
        
    // 定义 mids需要执行的api，也就是需要用到的参数
    const midApi={
      getState: store.getState,
      // dispatch,需要在包一层，dispatch是派发方法的，每个对象都去派发方法，防止被相互污染
      dispatch:(actions, ...args)=>dispatch(actions, ...args)
    }


    // 为什么要将，传进来的参数连起来，因为每次需要去执行，而不能让用户自己手动执行
    // 将middleware连起来  (thunk, logger)
    // thunk的执行需要dispatch logger日志的打印需要oldstate 和 newstate
    const middlewareChain=middleware.map(mids=>mids(midApi)) // 将中间件进行遍历执行
    console.log(middlewareChain,'middlewareChain')
    //加强dispatch
    dispatch = compose(...middlewareChain)(store.dispatch)
    
    // 2. 函数执行的结果，是返回新的sotore和加强版的dispatch
    return {
      ...store,
      dispatch // 加强版本的dispatch
    }
  }
}

// 函数聚合的方法
function compose(...funcs){
  console.log(funcs,'funcs')
  if(!funcs.length){
    return args =>args
  }
  if(funcs.length===1){
    return funcs[0]
  }
  return funcs.reduce((a,b)=>(...args)=>a(b(...args)))
}
