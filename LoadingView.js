import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

export default class LoadingView extends Component {

  renderActivityIndicator = () => {
    const defaultIndicator = (
      <ActivityIndicator style={[this.props.indicatorStyle]} size={this.props.size||'large'}/>
    )
    return this.props.indicator||defaultIndicator
  }

  renderContent = () => {
    const defaultContent = (
      <Text style={[styles.loadingText, this.props.textStyle]}>
        {this.props.text}
      </Text>
    )
    return this.props.content||defaultContent
  }

  getContainerStyles = () => {
    let style = [styles.container]
    if(this.props.overlay) style.push(styles.overlayContainer)
    style.push(this.props.style)
    return style
  }

  renderLoadingView = () => {
    return (
      <View style={this.getContainerStyles()}>
        {this.renderActivityIndicator()}
        {this.renderContent()}
      </View>
    )
  }

  render() {
    if(this.props.loading){
      return this.renderLoadingView()
    }else{
      return this.props.children
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  overlayContainer: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loadingText: {
    color: '#fff',
    fontWeight: '600',
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});
