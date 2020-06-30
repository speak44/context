import React,{useContext} from 'react'
import {ThemeContext} from '../Context'
export default function UserPage(props){
  const ctx = useContext(ThemeContext)
  console.log(ctx,'ctx');
  return(
    <div className={ctx.themeColor} >UserPage</div>
  )
}