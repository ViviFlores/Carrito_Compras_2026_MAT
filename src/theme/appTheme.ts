import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, QUARTERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

export const stylesGlobal = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingTop: 73
    },
    containerBody: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 40
    },
    titleWelcome: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: QUARTERNARY_COLOR,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 7
    },
    containerInput: {
        marginVertical: 17
    },
    button: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: SECONDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold'
    },
    iconPassword: {
        position: 'absolute',
        bottom: 15,
        right: 10
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    }

})