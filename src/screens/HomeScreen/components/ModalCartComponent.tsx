import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Cart } from '../HomeScreen';
import { stylesGlobal } from '../../../theme/appTheme';
import { TERTIARY_COLOR } from '../../../commons/constants';
import Icon from '@expo/vector-icons/MaterialIcons';

interface Props {
    isVisible: boolean;
    cart: Cart[]; //arreglo con los productos del carrito
    hiddenModal: () => void; // cerrar el modal
}

export const ModalCartComponent = ({ isVisible, cart, hiddenModal }: Props) => {
    const { width } = useWindowDimensions();

    //función para calcular el total a pagar
    const totalPay = (): number => {
        let total: number = 0;
        cart.forEach(product => {
            total += product.total;
        })
        return total;
    }

    //función para comprar productos
    const handleBuy = (): void => {
        hiddenModal();
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={stylesGlobal.containerModal}>
                <View style={{
                    ...stylesGlobal.bodyModal,
                    width: width * 0.80
                }}>
                    <View style={stylesGlobal.headerModal}>
                        <Text style={stylesGlobal.titleModal}>Mis Productos</Text>
                        <View style={stylesGlobal.iconCard}>
                            <Icon name='cancel'
                                color={TERTIARY_COLOR}
                                size={23}
                                onPress={hiddenModal} />
                        </View>
                    </View>
                    <View style={stylesGlobal.headerTable}>
                        <Text style={stylesGlobal.headerTextTable}>Producto</Text>
                        <View style={stylesGlobal.headerDescription}>
                            <Text style={{
                                ...stylesGlobal.headerTextTable,
                                marginHorizontal: 10
                            }}>Pre.</Text>
                            <Text style={{
                                ...stylesGlobal.headerTextTable,
                                marginHorizontal: 10
                            }}>Cant.</Text>
                            <Text style={{
                                ...stylesGlobal.headerTextTable,
                                marginHorizontal: 10
                            }}>Total</Text>
                        </View>
                    </View>
                    <FlatList
                        data={cart}
                        renderItem={({ item }) =>
                            <View style={stylesGlobal.headerTable}>
                                <Text>{item.name}</Text>
                                <View style={stylesGlobal.headerDescription}>
                                    <Text style={{ marginLeft: 10 }}>${item.price.toFixed(2)}</Text>
                                    <Text style={{ marginHorizontal: 25 }}>{item.quantity}</Text>
                                    <Text style={{ marginHorizontal: 10 }}>${item.total.toFixed(2)}</Text>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.id.toString()} />
                    <View style={stylesGlobal.containerTotalPay}>
                        <Text style={stylesGlobal.textTotalPay}>
                            Total pagar: ${totalPay().toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity style={stylesGlobal.button}
                        onPress={handleBuy}>
                        <Text style={stylesGlobal.buttonText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
