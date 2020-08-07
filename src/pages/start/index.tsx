import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Start() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, you're welcome to Watermelon Drop!</Text>
      <Text style={styles.description}>
        Below, you can browse some components that we have made available to
        you.
      </Text>
      <Text style={styles.description}>Please, enjoy!</Text>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Modals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Swipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}