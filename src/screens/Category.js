import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
// import * as mocks from '../constants/mock';
import { theme } from '../constants';
import {
  Container, Text, Badge, Card, Header, FloatButton,
} from '../components';

const { width } = Dimensions.get('window');


export default function Category() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  async function fetchData() {
    const mocked = [];
    // const mocked = mocks.categories;
    return setCategories(mocked);
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

      <FloatButton handlePress={() => console.log('Add Category Clicked')} />
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
