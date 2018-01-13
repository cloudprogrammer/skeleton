import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    AsyncStorage.getItem('objectId', (error, success) => {
      if (success) {
        // do stuff
      } else {
        this.props.navigation.dispatch({
          type: 'Navigation/RESET',
          index: 0,
          actions: [{ type: 'Navigation/NAVIGATE', routeName: 'Intro' }],
        });
      }
    }).catch((reason) => {
      console.log('====================================');
      console.log(reason);
      console.log('====================================');
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c2929',
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}> Loading </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Loading);
