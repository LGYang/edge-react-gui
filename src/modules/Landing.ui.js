import React, { Component } from 'react'
import { View, Text }  from 'react-native'
import { connect } from 'react-redux'

import TabBar from './TabBar/TabBar.ui'

class Landing extends Component {

  render () {
    return (
      <View>
        <Text>Sample!</Text>
      </View>
    )
  }

}

export default connect()(Landing)
