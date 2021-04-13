import React from 'react'
import { StyleSheet, Text, View} from 'react-native';

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Tasks for today</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      textTransform: 'uppercase',
      letterSpacing: 5,
    },
    header: {
      backgroundColor: 'deeppink',
      height: 80,
      paddingTop: 30,
    },
   
  
  });
  