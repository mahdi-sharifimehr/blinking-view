import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import Blink from './Blink';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.card}>
        <Blink duration={500}>
          <View style={styles.notification} />
        </Blink>
      </View>
      <Blink duration={2000}>
        <Text style={styles.text}>
          Pay attention to me
        </Text>
      </Blink>
      <Blink
        style={styles.button}
        duration={1000}
        repeat_count={3}
      >
        <Button title='Press me' />
      </Blink>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginVertical: 50,
    shadowColor: '#00000070', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 2, //IOS
    elevation: 5, // Android
    backgroundColor: 'gainsboro',
  },
  notification: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
  },
  text: {
    color: 'teal',
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  button: {
    marginVertical: 50,
    width: 200,
  }
});

export default App;
