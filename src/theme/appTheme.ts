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
        paddingVertical: 40
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
    },
    containerCard: {
        //flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        borderRadius: 3,
        borderStyle: 'solid',
        margin: 7,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 2
    },
    titleCard: {
        fontWeight: 'bold',
        fontSize: 16
    },
    textPrice: {
        textAlign: 'center'
    },
    imageCard: {
        width: 80,
        height: 80
    },
    iconCard: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 2
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    bodyModal: {
        padding: 20,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 1,
        padding: 10
    },
    titleModal: {
        fontWeight: 'bold',
        fontSize: 19
    },
    imageModal: {
        height: 200,
        width: 200
    },
    containerQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonQuantity: {
        backgroundColor: TERTIARY_COLOR,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    buttonQuantityText: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textTotalPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textStock: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#AB1818',
        textAlign: 'center'
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconHome: {
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: 30,
        paddingHorizontal: 30
    },
    textIconCart: {
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 13
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerDescription: {
        flexDirection: 'row'
    },
    headerTextTable: {
        fontWeight: 'bold',
        fontSize: 15,
        color: PRIMARY_COLOR
    },
    containerTotalPay: {
        alignItems: 'flex-end',
        marginVertical: 15
    },
    textTotalPay: {
        fontWeight: 'bold',
        fontSize: 18,
        color: PRIMARY_COLOR
    }

})