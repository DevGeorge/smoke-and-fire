import React ,{useState}from 'react'
import { View, Text, Pressable } from 'react-native'
import Styles from "../GlobalStyles"

const Button = (props) => {
const [textField] = useState(props.title)
    return (
        <Pressable style={{...Styles.button, ...props.style}} onPress={props.onPress}>
            <Text style={Styles.text}>{textField}</Text>
        </Pressable>
    )
}

export default Button
