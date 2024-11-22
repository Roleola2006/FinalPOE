import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MenuPage = ({ navigation, menu, setMenu }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    if (!dishName || !description || !course || !price) {
      alert('Please fill all fields');
      return;
    }
    const newItem = { dishName, description, course, price: parseFloat(price) };
    setMenu([...menu, newItem]);
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  const removeMenuItem = (index) => {
    const updatedMenu = [...menu];
    updatedMenu.splice(index, 1);
    setMenu(updatedMenu);
  };

  return (
    <View style={styles.container}>
    <Image
    source={require('./img/french-chef.webp')}
    style={styles.logo}
    resizeMode="contain"
    />
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Manage Menu</Text>

      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Course (e.g., Starter, MainCourse, Dessert)"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add Item" onPress={addMenuItem} />

      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>{item.dishName}</Text>
            <Text style={styles.menuText}>({item.course})</Text>
            <Text style={styles.menuText}>R{item.price}</Text>
            <Text style={styles.menuText}>Description: {item.description}</Text>
            <TouchableOpacity onPress={() => removeMenuItem(index)}>
              <Text style={styles.deleteText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D8BFD8',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderColor: '#888',
  },
  menuItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
  },
  deleteText: {
    color: 'red',
    marginTop: 5,
  },
  logo: {
    width: 230,
    height: 230,
    alignSelf: 'center',
    marginBottom: 30,
   },
  mainPicture: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageSize: {
    width: 200,
    height: 200,
  },
  menuText: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default MenuPage;
