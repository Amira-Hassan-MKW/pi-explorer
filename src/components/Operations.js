import React from 'react'
import {Grid, Panel, Row} from 'react-bootstrap'
import {injectIntl} from 'react-intl'
import OperationList from './OperationList'

class Operations extends React.Component {
  render() {
    const {formatMessage} = this.props.intl
    return (
      <Grid>
        <Row>
          <Panel header={formatMessage({id: 'operations'})}>
            <OperationList compact={false} limit={50} usePaging />
          </Panel>
        </Row>
      </Grid>
    )
  }
}

export default injectIntl(Operations)