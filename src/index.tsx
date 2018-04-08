import * as React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

interface Props {
}
 
interface State {
}

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    {'Open up App.tsx to start working on your app! yay'}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    } as ViewStyle,
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    } as TextStyle,
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    } as TextStyle,
  });