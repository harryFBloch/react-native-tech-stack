import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { CardItem } from './common'
import * as actions from '../actions'

class ListItem extends Component {

  render(){
    console.log(this.props)
    return(
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.item.id)}>
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>{this.props.library.item.title}</Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state) => {
  return {selectedLibraryId: state.selectedLibraryId}
}

export default connect(null, actions)(ListItem)
