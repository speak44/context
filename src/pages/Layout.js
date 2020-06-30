import React,{Component} from 'react'
import BottomBar from '../components/BottomBar'
import TopBar from '../components/TopBar'
export default class Layout extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const {title='ooo'} =this.props;
    document.title=title

  }
  render(){
    const {children,showTopBar, showBottmoBar} =this.props
    return(
      <div>
        {showTopBar&&<TopBar/>}
        <div>{children.content}</div>
        <div>{children.text}</div>
        <button onClick={children.btnclick}>这是一个按钮</button>
        {showBottmoBar&&<BottomBar/>}
      </div>
    )
  }
}