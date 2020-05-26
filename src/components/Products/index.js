import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/icon.png';

export default function Products(){
  const navigation = useNavigation();

  function navigateToProduct (){
    navigation.navigate('Product')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.appName}>
          Naja Store Management
        </Text>
      </View>

      <Text style={styles.title}>
        Estoque de Produtos
      </Text>
      <Text style={styles.helpText}>
      para mais informações aperte na setinha.
      </Text>

      <FlatList style={styles.productList}
     data = {[1,2,3,4,5,6,7,8,9,10]}
     keyExtractor= {product => String(product)}
     renderItem ={() => ( 
       <View style={styles.product}>

         <Text style={styles.productNome}>Celular Samsung</Text>
         <Text style={styles.productQuantidade}>23</Text>

         <TouchableOpacity style={styles.buttonMore} onPress= {navigateToProduct} >
           <Feather name= "arrow-up-right" size ={20} color="#77C9D4"/>
       </TouchableOpacity>

        </View>
     )}
   />
      

    </View>
     

  )
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  appName: {
    fontSize: 15,
    color: '#77C9D4',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
    marginTop: 30,
    color: '#a5a5af',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  helpText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    color: "#77C9D4"

  },
  productList: {
    marginTop: 30,
  },
  product: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  productNome: {
    fontSize: 12,
    color: "#262626",
    fontWeight: "bold"
  },
  productQuantidade: {
    fontSize: 20,
    color: "#000000",
   

  },
  buttonMore: {

  }


})

