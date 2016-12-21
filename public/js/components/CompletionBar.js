import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import * as formActions from '../actions/form'

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
        <div>
          Go to step:&nbsp;
          <a onClick={() => {this.props.setStep(1)}}>1</a>&nbsp;
          <a onClick={() => {this.props.setStep(2)}}>2</a>&nbsp;
          <a onClick={() => {this.props.setStep(3)}}>3</a>&nbsp;
          <a onClick={() => {this.props.setStep(4)}}>4</a>&nbsp;
          <a onClick={() => {this.props.setStep(5)}}>5</a>&nbsp;
          <a onClick={() => {this.props.setStep(6)}}>6</a>&nbsp;
        </div>
      </div>
    )
  }

}

export default connect(null, formActions)(CompletionBar)
