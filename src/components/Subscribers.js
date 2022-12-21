import React from 'react'
import { connect } from 'react-redux'
import { addSubscriber } from '../redux'

const Subscribers = (props) => {
  const { count, addSubscriber } = props
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기!</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { subscribers } = state
  return {
    count: subscribers.count
  }
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addSubscriber: ()=>dispatch{addSubscriber()}
// 	}
// }

// 위 코드를 짧게 만든것 (같은 기능)
const mapDispatchToProps = {
  addSubscriber
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)