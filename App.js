import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Medium.ttf'),
    'light': require('./assets/fonts/Poppins-ExtraLight.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>

      <LinearGradient
        // Button Linear Gradient
        colors={['#155576', '#155576b3', '#46201B',]}
        style={styles.bemvindo}>
        <Text style={styles.text}>BEM VINDO!</Text>
        <Text style={styles.text2}>Faça login ou crie sua conta</Text>
      </LinearGradient>

      <TextInput
        style={styles.input}
        placeholder='DIGITE SEU EMAIL/USUARIO'
        placeholderTextColor='white'

      // value={email}
      // onChangeText={setEmail}
      />


      <TextInput
        style={styles.input}
        placeholder='DIGITE SUA SENHA'
        placeholderTextColor='white'
      // value={email}
      // onChangeText={setEmail}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: '#161616',
  },
  bemvindo: {
    paddingTop: '20%',
    paddingBottom: '10%',
    height: '40%',
    width: '100%',
    
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 82,
    borderBottomLeftRadius: 82,
      shadowColor: "#fff",
    shadowOffset: {
      width: 3,
      height: 3, 
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontStyle: 'poppins',
    color: '#fff',
  },
  text2: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#fff',
    fontStyle: 'light',
    marginTop:'10%',
  },
  input: {
    backgroundColor: '#161616',
    width: '85%',
    borderWidth: 1,
    height: '10%',
    color: 'white',
    borderBottomColor: '#ddd',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    marginTop: '20%',
    fontStyle: 'poppins',
    fontSize: 14,
  //   shadowColor: "#fff",
  //   shadowOffset: {
  //     width: 0,
  //     height: 8, 
  //   },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 0,
  //   elevation: 8,
  }
});