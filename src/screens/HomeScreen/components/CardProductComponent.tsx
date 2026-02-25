import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { stylesGlobal } from '../../../theme/appTheme';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TERTIARY_COLOR } from '../../../commons/constants';
import { ModalProductComponent } from './ModalProductComponent';

interface Props {
  item: Product;
}

export const CardProductComponent = ({ item }: Props) => {
  //hook useState: permite gestionar el estado del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  //función para mostrar u ocultar el modal
  const hiddenModal = (): void => {
    setShowModal(!showModal);
  }

  return (
    <>
      <View style={stylesGlobal.containerCard}>
        <Image source={{
          uri: item.pathImage
        }}
          style={stylesGlobal.imageCard} />
        <View>
          <Text style={stylesGlobal.titleCard}>
            {item.name}
          </Text>
          <Text style={stylesGlobal.textPrice}>
            Precio: ${item.price.toFixed(2)}
          </Text>
        </View>
        <View style={stylesGlobal.iconCard}>
          <Icon name='add-shopping-cart'
            size={33}
            color={TERTIARY_COLOR}
            onPress={hiddenModal} />
        </View>
      </View>
      <ModalProductComponent isVisible={showModal} item={item} hiddenModal={hiddenModal} />
    </>
  )
}
