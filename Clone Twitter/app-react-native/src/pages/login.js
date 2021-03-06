/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/


import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  AsyncStorage
  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Login extends Component {

  state = {
    username: ''
  }

  async componentDidMount() {
    const username = await AsyncStorage.getItem('OmniStack: username')

    if(username) {
      this.props.navigation.navigate('App')
    }

  }

  handleInputChange = username => {
    this.setState( {username} )
  }

  handleLogin = async () => {
    const {username} = this.state

    if(!username.length) return

    await AsyncStorage.setItem('OmniStack: username', username)

    this.props.navigation.navigate('Timeline')

  }

	render() {
		return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
        <View style={styles.content}>

          <View>
            <Icon name="twitter" size={64} color="#4BB0EE"></Icon>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            value={this.state.username}
            onChangeText={this.handleInputChange}
            onSubmitEditing={this.handleLogin}
            returnKeyType="send"

          >
          </TextInput>

          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    ) 
	}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
  
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 30
    },
  
    input: {
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 15,
      alignSelf: "stretch",
      marginTop: 30
    },
  
    button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#4BB0EE",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    }
  });

