/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/


import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import api from '../services/api'
import Tweet from '../components/Tweet'
import socket from 'socket.io-client'

export default class Timeline extends Component {

    static navigationOptions = ({navigation} ) => ({
        title: 'Inicio',
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('New')}>
                <Icon
                    name="add-circle-outline"
                    size={24}
                    color="#4BB0EE"
                    style={{marginRight: 20}}
                />
            </TouchableOpacity>
        )
    })

    subscribeToEvent = () => {
        const io = socket('http://localhost:3000')
    
        io.on('tweet',data => {
          this.setState( {tweets: [data, ...this.state.tweets]} )
        })
    
        io.on('like', data => {
          this.setState( {tweets: this.state.tweets.map(tweet => 
            tweet._id == data._id ? data : tweet
          )} )
        })
      }

    state = {
        tweets: []
    }

    async componentDidMount() {
        this.subscribeToEvent()
        const response = await api.get('tweets')

        this.setState({tweets: response.data})
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.tweets}
                    keyExtractor={tweet => tweet._id}
                    renderItem={({item}) => <Tweet tweet={item}/>}
                >
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
  });
  