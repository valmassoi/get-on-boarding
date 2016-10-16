import React, { Component } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

class CompletionBar extends Component {

  render() {
    const { stepNumber } = this.props
    const saveStatus = '...saving TODO'// HACK
    const tooltip = (
      <Tooltip id="tooltip">
        Your data has been saved. Come back anytime to complete the form.
      </Tooltip>
    )
    return (
      <div class="well centered" style={{ marginTop: '15px', width: '600px', backgroundColor: 'white' }}>
        <div class="progress">
          <div class="progress-bar progress-bar-success" style={{ width: (stepNumber - 1) * 100 / 6 + '%' }} />
        </div>
        Step {stepNumber} of 6
        <span class="pull-right">
          <OverlayTrigger placement="left" delayHide={500} overlay={tooltip}>
            <p style={{ cursor: 'pointer' }} class="glyphicon glyphicon-info-sign" />
          </OverlayTrigger>
          &nbsp;{saveStatus}
        </span>
      </div>
    )
  }

}

export default CompletionBar
