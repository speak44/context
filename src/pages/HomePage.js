import React,{Component} from 'react'
import {ThemeContext} from '../Context'
import UserPage from './UserPage'
export default class HomePage extends Component{
  constructor(props){
    super(props)
  }
  static contextType = ThemeContext
  render(){
    const {themeColor} =this.context
    console.log(this)
    return(
      <div>
        <p className={themeColor}>HomePage</p>
        <UserPage/>
      </div>
    )
  }
}
