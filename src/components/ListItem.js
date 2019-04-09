import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native'
import { CardItem } from './common'
import * as actions from '../actions'

class ListItem extends Component {

  renderDescription(){
    if (this.props.expanded){
      return(
        <CardItem>
          <Text style={{flex: 1}}>{this.props.library.item.description}</Text>
        </CardItem>
      )
    }
  }

  componentWillUpdate(){
    LayoutAnimation.spring()
  }

  render(){
    console.log(this.props)
    return(
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.item.id)}>
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>{this.props.library.item.title}</Text>
          </CardItem>
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
