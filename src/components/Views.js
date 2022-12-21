import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addViews } from '../redux'

const Views = (props) => {
  const { count, addViews } = props
  const [number, setNumber] = useState(1)
  return (
    <div className="items">
      <h2>조회 수 : {count}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => addViews(number)}>조회하기!</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { views } = state
  return {
    count: views.count
  }
}

const mapDispatchToProps = {
  addViews: (number) => addViews(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)