# react-native-loading-view
Loading view to show your user that magic is happening in the background.

## Installation
Install an save it with npm...
```
npm install --save react-native-loading-view
```
Import it in the file you want to use it in...
```
import LoadingView from 'react-native-loading-view'
```

## Usage
Just wrap the components you want to hide while loading in a LoadingView component. It won't show its children unless the prop `loading` is set to `false`.
```
// This LoadingView would never show its children
<LoadingView loading={true}>
    <Text>Im finished!</Text>
</LoadingView>
```
The LoadingView is highly customnizable. You can use the following props:

|Prop|Value type|Usage|
|----|----------|-----|
|loading|boolean|determins wether the loading view is shown or not|
|style|object|Style which applies on the outer container of the component|
|text|string|Text which is shown below the activity indicator|
|textStyle|object|Sets the style of the specified text. Be creative!|
|content|component|The content shown below the activity indicator. Will replace the default text specified in the `text` prop|
|textStyle|object|Styles which apply on the wrapping text element of the content string|
|indicator|component|The component which should indicate that something great is happening. By default its an `<ActivityIndicator/>`.|
|size|large/small|The size of the activity indicator. Only applies if you use the default activity indicator.|
|overlay|boolean|If true, this will set the view as an absolute-positioned overlay over your content
|overlayStyle|object|The style used when you use the overlay mode. It's applied on the container component.|
## Example
This is just a simple example with the default react-native app
```javascript
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoadingView from 'react-native-loading-view'

export default class ReactNativeSandbox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount = () => {
    // This is just ment as an example of how you handle an asynchronus operation
    // In reality this might be a fetch or storage access
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 5000)
  }

  render() {
    return (
      <LoadingView loading={this.state.loading}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </LoadingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeSandbox', () => ReactNativeSandbox);
```
## License
MIT