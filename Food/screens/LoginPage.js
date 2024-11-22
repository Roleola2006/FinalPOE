import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button, SafeAreaView,  Image, Alert } from 'react-native';


const LoginPage = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLogin = () => {
      if (username && password) {
        navigation.navigate('HomePage'); 
      } else {
        alert('Please enter both username and password.');
      }
    };

    return (
      <View style={styles.container}>
        <Image
        source={require('./img/french-chef.webp')}
        style={styles.logo}
        resizeMode="contain"
        />
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.boldText}>Welcome To Christoffel Feasts</Text>
  
       

        <Text style={styles.boldText}>Fine Dining at It's Best</Text>

        <View style={styles.InputFlex}>
        <Text>Username:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter Username"
      />

      <Text>Password:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        secureTextEntry
      />

    
      
      <Button title="Login" onPress={handleLogin} />
    </View>
          </ScrollView>
      </SafeAreaView>
      </View>
      
      
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

    boldText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333', 
      marginBottom: 20,  
    },
    
    InputFlex: {
      width: '100%',  
      paddingHorizontal: 10,
    },
    HeadingText: {
      fontSize: 18,
      color: '#333',
      marginBottom: 5,  
    },
    InputBoxs: {
      borderWidth: 1,
      borderColor: '#ccc', 
      padding: 10,
      borderRadius: 8, 
      marginBottom: 20,  
      fontSize: 16,
      backgroundColor: '#fff',  
    },
    loginButton: {
      backgroundColor: '#ff0000',  
      color: '#fff',  
      padding: 10,
      borderRadius: 8,  
    },
  });
  
  export default LoginPage;
