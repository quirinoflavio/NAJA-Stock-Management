import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { submit, get, remove } from '../services/api';
import { theme } from '../constants';
import {
  Container, Text, Badge, Card, Header, FloatButton, RegisterCategory, Button,
} from '../components';

const { width } = Dimensions.get('window');


export default function Category() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);

  function model(name) { return { name, products: [] }; }

  function showModal() { setVisible(true); }
  function hideModal() { setVisible(false); }
  function handleSubmit(name) {
    submit('category', model(name));
    fetchData();
  }
  function handleDelete(name) {
    remove('category', name);
    fetchData();
  }

  async function fetchData() {
    const data = await get('category');
    const filter = [];
    data.forEach((cat) => {
      const newCat = {
        id: cat.id,
        name: cat.data.name,
        image: require('../assets/images/warehouse.png'),
        count: cat.data.products.length,
      };
      filter.push(newCat);
    });
    setCategories(filter);
  }


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Container color={theme.colors.white}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: theme.sizes.base * 2 }}
      >
        <Container flex={false} row space="between" style={styles.categories}>
          {categories.map((category) => (
            <>

              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate('Products', { categoryName: category.name })}
              >
                <Card center middle shadow style={styles.category}>
                  <Button
                    style={styles.options}
                    onPress={() => (
                      Alert.alert(
                        `Deseja realmente apagar "${category.name}"?`,
                        'Essa operação não pode ser desfeita.',
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          { text: 'OK', onPress: () => handleDelete(category.name) },
                        ],
                        { cancelable: false },
                      )
                    )}
                  >
                    <Image style={styles.delete} source={require('../assets/images/trash.png')} />

                  </Button>
                  <Badge margin={[-theme.sizes.padding, 0, 15]} size={50}>
                    <Image style={styles.icon} source={category.image} />
                  </Badge>
                  <Text numberOfLines={1} medium height={20}>
                    {category.name}
                  </Text>
                  <Text gray caption>
                    {`${category.count} products`}
                  </Text>
                </Card>
              </TouchableOpacity>
            </>
          ))}
        </Container>
      </ScrollView>

      <RegisterCategory visible={visible} onHide={hideModal} onSubmit={handleSubmit} />
      <FloatButton hide={visible} handlePress={showModal} />
    </Container>
  );
}


const styles = StyleSheet.create({
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
  icon: {
    width: theme.sizes.base * 2.4,
    height: theme.sizes.base * 2.4,
  },
  options: {
    marginLeft: 'auto',
    marginTop: -theme.sizes.base + 5, // default card padding
    paddingHorizontal: 5,
    height: 30,
    marginRight: -theme.sizes.base, // Default card padding
  },
  delete: {
    opacity: 0.8,
    height: 20,
    width: 20,
  },
});
