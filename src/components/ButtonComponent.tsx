import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

interface Props {
    buttonText: string;
    onPress: () => void; //función como propiedad
}

export const ButtonComponent = ({ buttonText, onPress }: Props) => {
    return (
        <TouchableOpacity style={stylesGlobal.button}
            onPress={onPress}>
            <Text style={stylesGlobal.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}
