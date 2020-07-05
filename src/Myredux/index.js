//  将 createStore 导入
import createStore from './createStore'
// 将 reudx使用中间件的方法导入
import applyMiddleware from './applyMiddleware'

// 导出
export {
  createStore,
  applyMiddleware
}