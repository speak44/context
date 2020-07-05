import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/'
ReactDOM.render(
  <App />,
document.getElementById('root')
);

// store.subscribe(()=>{
//   ReactDOM.render(
//     <App />,
//   document.getElementById('root')
//   );
// })


// function f1(params){
//   console.log('f1',params)
//   return params
// }
// function f2(params){
//   console.log('f2',params)
//   return params
// }
// function f3(params){
//   console.log('f3',params)
//   return params
// }
// const res = compose(f1)('omg')

// function compose(...funcs){
//   // console.log(funcs.length)
//   if(!funcs.length){
//     return args=> args
//   }
//   // if(funcs.length===1){
//   //   return funcs[0]
//   // }
//   return funcs.reduce((a,b)=>(...args)=>{a(b(...args))})

// }
// console.log(res)