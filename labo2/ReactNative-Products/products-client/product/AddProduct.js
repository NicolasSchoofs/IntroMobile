import React, { Component } from 'react'
import { Text,  TextInput, View, TouchableOpacity, Keyboard, SafeAreaView, FlatList} from 'react-native'
import axios from 'axios'
import styles from '../style/styles.js'
  

export default class AddProduct extends Component {  
  
  constructor(props) {  
    super(props)
    this.state= {
      products: [],
      productToAdd: {
        id: "",
        price:"",
        name:"",
        brand:"",
        description:"",
        link:""
      }
    }
  }
  renderItem(item) {
    return (<View style={ styles.item }>
              <Text style={ styles.product }>{ item.name } - { item.brand } - { item.price }€</Text>
            </View>)
  }
    
  addProduct() {
    axios.post("http://localhost:3000/products/add", this.state.productToAdd).then(response  => {
      this.setState({products: response.data})
    })
  }
  
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.header1 }>Add Product</Text>
        <View style={ styles.container }>
          <SafeAreaView>
            <TextInput
              style={styles.textInput}
              placeholder="id"
              // we moeten dit op deze manier doen aangezien we niet gewoon (text) => this.setState({ productToAdd.id: text }) kunnen doen.
              onChangeText={(text) => this.setState(prevState => {
                let productToAdd =  Object.assign({}, prevState.productToAdd)
                productToAdd.id = text
                return {productToAdd}
              })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="price"
              onChangeText={(text) => this.setState(prevState => {
                let productToAdd =  Object.assign({}, prevState.productToAdd)
                productToAdd.price = text
                return {productToAdd}
              })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="name"
              onChangeText={(text) => this.setState(prevState => {
                let productToAdd =  Object.assign({}, prevState.productToAdd)
                productToAdd.name = text
                return {productToAdd}
              })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="brand"
              onChangeText={(text) => this.setState(prevState => {
                let productToAdd =  Object.assign({}, prevState.productToAdd)
                productToAdd.brand = text
                return {productToAdd}
              })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="description"
              onChangeText={(text) => this.setState(prevState => {
                let productToAdd =  Object.assign({}, prevState.productToAdd)
                productToAdd.description = text
                return {productToAdd}
              })}
            />
            <TextInput
              style={styles.textInput}
              placeholder="link"
              onChangeText={(text) => this.setState(prevState => {
                let productToAdd =  Object.assign({}, prevState.productToAdd)
                productToAdd.link = text
                return {productToAdd}
              })}
            />
          </SafeAreaView>
          <TouchableOpacity
            style={styles.styledButton}
            onPress={() => {
              this.addProduct();
              Keyboard.dismiss();
            }}
            >
            <Text style={styles.styledButtonText}>Add</Text>
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