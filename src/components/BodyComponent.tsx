import React, { ReactNode } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

interface Props {
    children: ReactNode; //componente react
}

export const BodyComponent = ({ children }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...stylesGlobal.containerBody,
            height: height * 0.85
        }}>
            {children}
        </View>
    )
}
