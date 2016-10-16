import React, { Component } from 'react'

class CompletionBar extends Component {

  render() {
    const { stepNumber } = this.props
    return (
      <div class="well centered" style={{ marginTop: '15px', width: '600px', backgroundColor: 'white' }}>
        <div class="progress">
          <div class="progress-bar progress-bar-success" style={{ width: (stepNumber - 1) * 100 / 6 + '%' }} />
        </div>
        Step {stepNumber} of 6
      </div>
    )
  }

}

export default CompletionBar
