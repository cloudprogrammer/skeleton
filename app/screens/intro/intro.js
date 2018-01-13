import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/button/';
import Container from '../../components/container/';

class Intro extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <View style={{ alignItems: 'center', flex: 1, paddingTop: 50 }}>
            <Text style={{ fontSize: 40, color: this.props.text, backgroundColor: 'transparent' }}>Shifter</Text>
          </View>
          <View style={{ justifyContent: 'center', flex: 1, paddingBottom: '50%' }}>
            <Button text="Register" onPress={() => this.setState({ })} padding background={this.props.accent} />
            <Text
              style={{
                color: this.props.text, paddingVertical: 20, fontSize: 20, textAlign: 'center',
              }}
            > Or
            </Text>
            <Button text="Log In" onPress={() => this.props.navigation.navigate('LogIn')} padding background={this.props.accent} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 20, color: this.props.text, backgroundColor: 'transparent', paddingBottom: 10,
              }}
            >Copyright © Shifter 2017
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  text: state.theme.text,
  accent: state.theme.accent,
  rowColor: state.theme.rowColor,
});

export default connect(mapStateToProps)(Intro);
