import { createStore } from 'redux'


// 定义state初始化和修改规则
function createRenderer(store=1,action){
  console.log(action)
  switch (action.type) {
    case 'ADD':
        return store+1
      break;
      case 'MINUS':
        return store-1
      break;
    default:
        return store
      break;
  }
}

const store = createStore(createRenderer)

export default store