import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../../components/Spacer'
import { red } from 'color-name'

const SignupScreen = ({navigation}) => {  
    return (
        <View style={styles.container} >
            <Spacer>
                <Text h3>Sign Up</Text>
            </Spacer>
            <Input label="Email"></Input>
            <Input label="Password"></Input>
            <Button title="Sign Up"
                onPress={() => navigation.navigate('Signin')}
            ></Button>
            {/* <Button title="Go to main flow"
                onPress={() => navigation.navigate('mainFlow')}
            ></Button> */}
        </View>
    )
}

SignupScreen.options = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
})

export default SignupScreen;