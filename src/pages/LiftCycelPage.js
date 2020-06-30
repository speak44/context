import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class LiftCycePage extends Component{
  constructor(){
    super()
  }
  static defaultProps ={
    msg:'name'
  }
  static propTypes={
    msg: PropTypes.string
  }
  render(){
    const {msg} = this.props
    return(
      <div>
        <h4>LiftCycePage</h4>
        <p>{msg}</p>
      </div>
    )
  }
}