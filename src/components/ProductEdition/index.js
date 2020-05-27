import React from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';
import logoImg from '../../assets/images/warehouse.png';
import {useNavigation, useState, useRoute} from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { Update } from '../../services/api';
import { Feather } from '@expo/vector-icons';


export default function ProductEdition (){

  const route = useRoute();

  const product = route.params.product;

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);
  

  function model(_name, _description, _quantity, _price, ) {
    return {

      name: _name,
      description: _description,
      quantity: _quantity,
      price: _price,
    };
  }

  const navigation = useNavigation();

  function navigateGoBack (){
    navigation.goBack()
}

  return(
    <KeyboardAvoidingView style={styles.container}>

    <View style={styles.header}>
        <TouchableOpacity style={styles.buttonMore} onPress= {navigateGoBack} >
           <Feather name= "arrow-left" size ={20} color="#77C9D4"/>
        </TouchableOpacity>
        <Image source={logoImg} />
        <Text style={styles.appName}>
          Naja Store Management
        </Text>
    </View>

    <View style={styles.section}>
        
        <Text style={styles.sectionTitle}>
          Preencha apenas os campos que você deseja alterar
        </Text>
    </View>

      <View style={styles.form}>
        <TextInput

        style={styles.input}
        placeholder = "Nome do Produto"
        autoCorrect = {false}
        onChangeText= {(text) => setName(text)}
        />
          <TextInput
          style={styles.input}
        placeholder = "Descrição do Produto"
        autoCorrect = {false}
        onChangeText= {(text) => setDescription(text)}
        />
          <TextInput
          style={styles.input}
        placeholder = "Preço do Produto(ex: 19.90)"
        autoCorrect = {false}
        onChangeText= {(text) => setPrice(text)}
        />

        <TextInput
        style={styles.input}
        placeholder = "Quantidade do Produto(ex: 20, 12)"
        autoCorrect = {false}
        onChangeText= {(text) => setQuantity(text)}
        />

      </View>

      <Button icon="content-save-outline" mode="contained" onPress={() => {
              update('Products', name, model(
                name, description, quantity, price
              ));
              navigateGoBack;
            }}>
        Salvar
      </Button>

    </KeyboardAvoidingView>


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
      imageProduto: {
        borderRadius: 40,
        paddingBottom: 10,
        paddingTop: 20
    }, 
    product: { 
      padding: 15,
      borderRadius: 10,
      backgroundColor: "#ffffff",
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'flex-start'
  
    }, titleProduct: {
      padding: 5,
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#77C9D4",
    },
    productNome: {
      fontSize: 26,
      color: "#ffffff",
      fontWeight: "bold",
      textAlign: 'center'
    },
    productQuantidade: {
      fontSize: 22,
      color: "#000000",
    },
    productPreco: {
      fontSize: 22,
      color: "#262626",
      
    },
    editionArea:{
      paddingTop: 20,
      padding: 5
    },
    titleDescription: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: "#ffffff",
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    productDescription: {
      fontSize: 14,
      color: "#262626",
    },
    form: {
      padding: 15,
      marginTop: 30,
      borderRadius: 10,
      backgroundColor: "#ffffff",
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      backgroundColor: '#77C9D4',
      width:"100%",
      marginBottom:20,
      color:'#262626',
      fontSize: 15,
      fontWeight: 'bold',
      borderRadius: 12,
      padding: 12,
      opacity: 60

    },
    buttonSalvar: {
      backgroundColor: '#d9d9d9',
      alignSelf: "center",
      width: 100,
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      padding: 5
    },
    section: {
      padding: 10,
      marginTop: 20,
      borderTopStartRadius: 10,
      backgroundColor: "#ffe6e6",
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    sectionTitle: {
      fontSize:14,
      fontWeight: 'bold',
      color: '#262626'
    }



})