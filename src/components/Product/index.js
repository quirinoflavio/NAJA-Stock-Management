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
import {useNavigation} from '@react-navigation/native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/icon.png';




export default function Product(){

const navigation = useNavigation();

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
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>
        </View>

        <View style={styles.titleProduct}>
            <Text style={styles.productNome}>Celular Samsung</Text>
        </View>

        <View style={styles.product}>
            <Text style={styles.productPreco}>Preço: R$ 2.000</Text>
            <Text style={styles.productQuantidade}>Quantidade: 23</Text>
        </View>

    </View>

    <View style={styles.editionArea}>

        <Button icon="lead-pencil" color="#77C9D4" mode="outlined" onPress={navigateToProductEdition}>
            editar produto
        </Button>
        <Button icon="trash-can-outline" color= "#ff6666" mode="outlined" onPress={() => console.log('Pressed')}>
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
        paddingTop: 20,
        padding: 5
      }



})

















            