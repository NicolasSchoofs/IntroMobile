import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import styles from '../style/styles.js'
import axios from 'axios'

export default class ListProduct extends Component {  
      
    constructor(props) {
      super(props)
      this.state= {
        products: [],
      }
    } 
  
    // componentDidMount still works, but only 
    // the first time it is loaded
    async getProducts() {
        await axios.get("http://localhost:3000/products/").then(response  => {
          this.setState({products: response.data})
          return response.data
      })
    }

    componentDidMount() {
      this.getProducts()
      // listen to events emitted by React Navigation, in this case focus
      this._unsubscribe = this.props.navigation.addListener('focus', () => { this.getProducts() })
    }

    componentWillUnmount() {
      this._unsubscribe()
    }

    renderItem(item) {
      return (<View style={ styles.item }>
                <Text style={ styles.product }>{ item.name } - { item.brand } - { item.price }€</Text>
              </View>)
    }

    render() {
      return (
        <View style={ styles.container }>
          <Text style={ styles.header1 }>List Products</Text>
          <View style={ styles.container }>
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
