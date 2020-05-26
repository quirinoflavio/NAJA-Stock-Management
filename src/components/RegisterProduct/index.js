import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Image } from 'react-native';
import { Modal, TextInput } from 'react-native-paper';
import { Container, Text, Button } from '../Base';
import { theme } from '../../constants';
import randomImageName from '../../utils';
import { uploadImage } from '../../services/api';


export default function RegisterProduct({
  visible, onHide, onSubmit, categoryID,
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [imgUri, setImgUri] = useState('');
  const [imgName, setImgName] = useState('');

  function model(_name, _description, _imgName, _quantity, _price) {
    return {
      categoryID: 'temporario', // substituir por categoryID
      name: _name,
      description: _description,
      quantity: _quantity,
      picture: _imgName,
      price: _price,
    };
  }

  async function onChooseImagePress() {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      const ext = result.uri.split('.')[1];
      const randName = randomImageName(20, ext);
      setImgUri(result.uri);
      setImgName(randName);
    }
  }

  async function handleUploadImage(uri, imageName) {
    const response = await fetch(uri);
    const blob = await response.blob();
    return uploadImage('images', imageName, blob);
  }

  return (
    <Modal visible={visible} onDismiss={() => onHide()}>
      <Container padding={[0, 10, 10]} margin={[0, 10, 0]} color="white" style={styles.container} flex={false}>

        <Text h3 bold primary style={styles.title}>Cadastrar Produto</Text>
        <Container flex={false} center style={styles.containerImage}>
          <Button onPress={onChooseImagePress}>
            {imgUri ? (
              <Image
                style={styles.image}
                source={{
                  height: 150, width: 250, isStatic: true, uri: imgUri,
                }}
              />
            ) : <Image style={styles.image} source={require('../../assets/images/upload-image.jpg')} />}
          </Button>
        </Container>
        <TextInput dense onChangeText={(text) => setName(text)} label="Nome" mode="outlined" />
        <TextInput dense onChangeText={(text) => setDescription(text)} label="Descrição" mode="outlined" />
        <TextInput dense onChangeText={(text) => setPrice(text)} label="Quantidade" mode="outlined" />
        <TextInput dense onChangeText={(text) => setQuantity(text)} label="Preço" mode="outlined" />

        <Container flex={false} right flexDirection="row">
          <Button
            onPress={() => {
              onHide();
              setImgUri('');
            }}
          >
            <Text bold accent size={theme.sizes.base}>Cancelar</Text>
          </Button>
          <Button
            onPress={() => {
              handleUploadImage(imgUri, imgName);
              onSubmit(model(
                name, description, imgName, quantity, price,
              ));
              onHide();
              setImgUri('');
            }}
            style={styles.rightButton}
          >
            <Text primary bold size={theme.sizes.base}>Cadastrar</Text>
          </Button>
        </Container>

      </Container>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    color: theme.colors.white,
    borderRadius: 5,
  },
  title: { paddingVertical: 10 },
  rightButton: { marginLeft: 20, marginRight: 10 },
  image: {
    maxWidth: 250,
    maxHeight: 150,
  },
  containerImage: {
    paddingVertical: 50,
  },

});
