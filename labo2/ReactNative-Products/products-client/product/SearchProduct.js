import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Keyboard, FlatList, SafeAreaView} from 'react-native'
import styles from '../style/styles.js'
import axios from 'axios'

export default class SearchProduct extends Component {  
  
  constructor(props) {  
    super(props)
    this.state={products: [], input:""}
  }

  searchAll() {
    axios.post("http://localhost:3000/products/searchAll", {name: this.state.input}).then(response  => {
      this.setState({products: response.data})
  })
  }

  renderItem(item) {
    return (<TouchableOpacity
              onPress={() => {
              this.props.navigation.navigate('Edit', { name: item.name }) }}>
              <View style={ styles.item }>
                <Text style={ styles.product }>{ item.name } - { item.brand } - { item.price }€</Text>
              </View>
            </TouchableOpacity>)
  }

  render() {
    return (
      <View style={ styles.container }>
          <Text style={ styles.header1 }>Search Product</Text>
          <View style={ styles.container }>
            <SafeAreaView>
              <TextInput
                style={styles.textInput}
                placeholder="Search Product"
                onChangeText={(text) => this.setState({ input: text })}
              />
            </SafeAreaView>
            <TouchableOpacity
            style={styles.styledButton}
            onPress={() => {
              this.searchAll();
              Keyboard.dismiss();
            }}
            >
            <Text style={styles.styledButtonText}>Search</Text>
          </TouchableOpacity>
          <FlatList
            data={this.state.products}
            renderItem={(item) => this.renderItem(item.item)}
              >
            </FlatList>
        </View>
      </View>
    )
  }  
}  
