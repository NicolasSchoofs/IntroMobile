import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListProduct from './product/ListProduct'
import AddProduct from './product/AddProduct'
import SearchProduct from './product/SearchProduct'

const Tab = createBottomTabNavigator()

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
            tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            labelStyle: {
              fontSize: 20
            }
          }}>
          <Tab.Screen
            name='List'
            component={ ListProduct }
          />
          <Tab.Screen
            name='Add'
            component={ AddProduct }
          />
          <Tab.Screen
            name='Search'
            component={ SearchProduct }
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App