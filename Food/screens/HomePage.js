import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, SafeAreaView, TouchableOpacity } from 'react-native';

const courseData = {
  MainCourse: [
    { label: 'Spaghetti Bolognese - R380', value: 'Spaghetti Bolognese', fee: 380, description: 'Classic pasta with rich meat sauce.' },
    { label: 'Grilled Salmon - R350', value: 'Grilled Salmon', fee: 350, description: 'Perfectly grilled salmon with lemon butter.' },
    { label: 'Margherita Pizza - R300', value: 'Margherita Pizza', fee: 300, description: 'Simple and delicious pizza with fresh basil.' },
    { label: 'Chicken Alfredo Pasta - R400', value: 'Chicken Alfredo Pasta', fee: 400, description: 'Creamy pasta with tender chicken pieces.' },
    { label: 'Grilled Steak - R450', value: 'Grilled Steak', fee: 450, description: 'Juicy grilled steak with herb seasoning.' },
  ],
  Starter: [
    { label: 'Stuffed Mushrooms - R100', value: 'Stuffed Mushrooms', fee: 100, description: 'Mushrooms stuffed with cheese and herbs.' },
    { label: 'Caprese Salad - R150', value: 'Caprese Salad', fee: 150, description: 'Fresh mozzarella, tomatoes, and basil.' },
    { label: 'Spring Rolls - R50', value: 'Spring Rolls', fee: 50, description: 'Crispy rolls with vegetable filling.' },
    { label: 'Shrimp Cocktail - R250', value: 'Shrimp Cocktail', fee: 250, description: 'Chilled shrimp with cocktail sauce.' },
    { label: 'French Onion Soup - R175', value: 'French Onion Soup', fee: 175, description: 'Rich soup topped with melted cheese.' },
  ],
  Dessert: [
    { label: 'Crème Brûlée - R190', value: 'Crème Brûlée', fee: 190, description: 'Creamy custard with caramelized sugar.' },
    { label: 'Milk Tart - R180', value: 'Milk Tart', fee: 180, description: 'South African classic with cinnamon flavor.' },
    { label: 'Lemon Tart - R185', value: 'Lemon Tart', fee: 185, description: 'Tangy lemon filling in a buttery crust.' },
    { label: 'Cremora Tart - R100', value: 'Cremora Tart', fee: 100, description: 'No-bake tart with condensed milk.' },
    { label: 'Chocolate Cake - R80', value: 'Chocolate Cake', fee: 80, description: 'Rich and moist chocolate cake.' },
  ],
};

const HomePage = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Starter');
  const [selectedDish, setSelectedDish] = useState(null);
  const [averagePrices, setAveragePrices] = useState({});

  useEffect(() => {
    const calculateAveragePrices = () => {
      const averages = {};
      for (const category in courseData) {
        const total = courseData[category].reduce((sum, item) => sum + item.fee, 0);
        averages[category] = (total / courseData[category].length).toFixed(2); // Average with 2 decimal points
      }
      setAveragePrices(averages);
    };
    calculateAveragePrices();
  }, []);

  const displayDishes = () => {
    return courseData[selectedCategory].map((dish, index) => (
      <TouchableOpacity key={index} style={styles.menuItem} onPress={() => setSelectedDish(dish)}>
        <Text>{dish.label}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.averagePrices}>
          <Text style={styles.averagePricesHeader}>Average Prices:</Text>
          <Text>Starters: R{averagePrices.Starter}</Text>
          <Text>Main Course: R{averagePrices.MainCourse}</Text>
          <Text>Dessert: R{averagePrices.Dessert}</Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.logo}>Fine Dining</Text>
        </View>

        <View style={styles.menuLabel}>
          <Text style={styles.menuText}>Menu</Text>
        </View>

        <View style={styles.courseButtons}>
          <Button title="Starters" onPress={() => setSelectedCategory('Starter')} />
          <Button title="Main Course" onPress={() => setSelectedCategory('MainCourse')} />
          <Button title="Dessert" onPress={() => setSelectedCategory('Dessert')} />
        </View>

        <View style={styles.menuItems}>
          <ScrollView>{displayDishes()}</ScrollView>
        </View>

        

        {selectedDish && (
          <View style={styles.selectedDish}>
            <Text style={styles.dishTitle}>{selectedDish.label}</Text>
            <Text style={styles.dishDescription}>{selectedDish.description}</Text>
          </View>
        )}

        <Button title="Go to Menu Page" onPress={() => navigation.navigate('MenuPage')} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8BFD8',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  menuLabel: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  menuText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  courseButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  menuItems: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  averagePrices: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  averagePricesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectedDish: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dishTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dishDescription: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default HomePage;
