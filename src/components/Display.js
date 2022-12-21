import React from 'react'
import { connect } from 'react-redux'
const Display = (props) => {
  const { count } = props
  return (
    <div>
      <p> 구독자 수 : {count}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { subscribers } = state
  return {
    count: subscribers.count
  }
}

export default connect(mapStateToProps)(Display)