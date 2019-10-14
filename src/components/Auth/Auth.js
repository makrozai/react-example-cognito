import React from 'react'
import PropTypes from 'prop-types'

import { config } from 'aws-cognito-redux-saga'

class Auth extends React.Component {
  static propTypes = {
    getUser: PropTypes.func
  }

  componentWillMount() {
    config.config.set({
      region: 'us-east-1',
      IdentityPoolId: '',
      UserPoolId: 'us-east-1_fZTE2igYg',
      ClientId: '6r9k6f10m7d4n56003j4jmvq23'
    })

    this.props.getUser()
  }

  render() {
    return null
  }
}

export default Auth
