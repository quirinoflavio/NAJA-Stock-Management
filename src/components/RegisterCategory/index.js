import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, TextInput } from 'react-native-paper';
import { Container, Text, Button } from '../Base';
import { theme } from '../../constants';

export default function RegisterCategory({ visible, onHide, onSubmit }) {
  const [name, setName] = useState('');

  return (
    <Modal visible={visible} onDismiss={() => onHide()}>
      <Container padding={[0, 10, 10]} margin={[0, 10, 0]} color="white" style={styles.container} flex={false}>

        <Text h3 bold primary style={styles.title}>Cadastrar Categoria</Text>
        <TextInput onChangeText={(text) => setName(text)} label="Nome" mode="outlined" />

        <Container flex={false} right flexDirection="row">
          <Button onPress={() => onHide()}><Text bold accent>Cancelar</Text></Button>
          <Button
            onPress={() => {
              onSubmit(name);
              onHide();
            }}
            style={styles.rightButton}
          >
            <Text primary bold>Cadastrar</Text>
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
});
