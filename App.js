import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
// import { auth, firestore } from './firebaseConfig';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
// import { collection, addDoc, getDocs, query, where, serverTimestamp, deleteDoc, doc } from 'firebase/firestore';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Medium.ttf'),
    'light': require('./assets/fonts/Poppins-Light.ttf'),
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
        colors={['#155576b3', '#46201B',]}
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

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>ACESSAR</Text>
      </TouchableOpacity>

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
    height: '35%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 82,
    borderBottomLeftRadius: 82,
    //   shadowColor: "#fff",
    // shadowOffset: {
    //   width: 3,
    //   height: 3, 
    // },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
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
    marginTop: '10%',
  },
  input: {
    backgroundColor: '#161616',
    width: '85%',
    borderWidth: 1,
    height: '9%',
    color: 'white',
    borderBottomColor: '#ddd',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    marginTop: '12%',
    fontStyle: 'poppins',
    fontSize: 12,
  },

  botao: {
    width: '70%',
    borderWidth: 1,
    height: '9%',
    borderColor: '#ddd',
    backgroundColor: 'rgba(217,217,217,0.5)',
    borderRadius: 37,
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoTexto: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'poppins',
  }
});