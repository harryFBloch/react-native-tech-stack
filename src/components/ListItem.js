import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardItem } from './common'

class ListItem extends Component {

  render(){
    return(
      <CardItem>
        <Text style={styles.titleStyle}>{this.props.library.item.title}</Text>
      </CardItem>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem
