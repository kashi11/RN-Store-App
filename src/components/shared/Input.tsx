import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TextInputProps } from 'react-native/types'

type Props = TextInputProps & {
    error?: string
}

export const Input = ({ error, style, ...rest }: Props): JSX.Element => {

    return <View>
        <TextInput {...rest} style={styles.nativeInput} />
        {error && <Text style={styles.error}>{error}</Text>}
    </View>
}

const styles = StyleSheet.create({
    nativeInput: {
        borderWidth: 1,
        borderColor: "#e6e6e6",
        borderRadius: 4
    },
    container: {
        display: "flex"
    },
    error: {
        marginTop: 4,
        color: "#FF0000",
        fontSize: 12,
        fontStyle: 'italic'
    }
})