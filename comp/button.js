import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native" ;

const Button = (props) => {
    return (
      <TouchableOpacity onPress={props.onClick}>
        <View>
            <Text style={props.txtSty}>
                {props.title}
            </Text>
        </View>
      </TouchableOpacity>

    )
} 

export default Button;