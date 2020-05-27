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
import {Dialog, ScrollView, Card, DefaultTheme, Modal, Portal, Button, Provider, Avatar } from 'react-native-paper';
import {useNavigation , useRoute} from '@react-navigation/native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/images/warehouse.png';
import {get, remove, update} from '../../services/api';




export default function Product(){

const navigation = useNavigation();

const route = useRoute();

const product = route.params.product;

function navigateToProducts (){
    navigation.navigate('Products')
}

function navigateToProductEdition (){
  navigation.navigate('ProductEdition')
}


  return (
  <View style={styles.container}> 
    <View style={styles.header}>
        <TouchableOpacity style={styles.buttonMore} onPress= {navigateToProducts} >
           <Feather name= "arrow-left" size ={20} color="#77C9D4"/>
        </TouchableOpacity>
        <Image source={logoImg} />
        <Text style={styles.appName}>
          Naja Store Management
        </Text>
    </View>
    
    < View style={styles.Product}>

        <View style={styles.imageProduto}>
            <Card>
                <Card.Cover source={{ uri: product.ImgUri }} />
            </Card>
        </View>

        <View style={styles.titleProduct}>
            <Text style={styles.productNome}>{product.name}</Text>
        </View>

        <View style={styles.titleDescription}>
            <Text style={styles.productDescription}>{product.description}</Text>
        </View>

        <View style={styles.product}>
            <Text style={styles.productPreco}>Praço: {product.price}</Text>
            <Text style={styles.productQuantidade}>Quantidade: {product.quantity}</Text>
        </View>

    </View>

    <View style={styles.editionArea}>

        <Button icon="lead-pencil" color="#77C9D4" mode="outlined" onPress={() => navigateToProductEdition(product)}>
            editar produto
        </Button>
        <Button icon="trash-can-outline" color= "#ff6666" mode="outlined" onPress={() => {
          remove("products", product);
          navigateToProducts;
        }}>
            excluir produto
        </Button>


    </View>



  </View>);
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
        paddingTop: 5 ,
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
      }



})

















            