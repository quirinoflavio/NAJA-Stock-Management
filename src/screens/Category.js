import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import { submit, get } from '../services/api';
import { theme } from '../constants';
import {
  Container, Text, Badge, Card, Header, FloatButton, RegisterCategory,
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
            <TouchableOpacity
              key={category.name}
              onPress={() => navigation.navigate('Products', { categoryName: category.name })}
            >
              <Card center middle shadow style={styles.category}>
                <Badge margin={[0, 0, 15]} size={50}>
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
});
