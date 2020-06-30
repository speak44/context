import React,{Component} from 'react'
import Layout from './Layout'
export default class HomePage extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Layout showTopBar={false} showBottmoBar={true} title={'这是首页'}>
        {/* <div>
          <p>HomePage........</p>
        </div> */}
        {
          {
            content:(<div>
            <p>HomePage........</p>
          </div>),
          text:'这是文本',
          btnclick:()=>{console.log('home点击')}
          }
        }
      </Layout>
    )
  }
}
