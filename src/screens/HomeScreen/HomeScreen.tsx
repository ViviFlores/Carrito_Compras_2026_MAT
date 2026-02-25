import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProductComponent } from './components/CardProductComponent';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {

    //datos de prueba
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 2.00, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 1.50, stock: 4, pathImage: 'https://tienda.propieta.ec/wp-content/uploads/2021/03/azucar-blanca.jpg' },
        { id: 3, name: 'Funda de papas', price: 3.00, stock: 0, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65701_G.jpg' },
        { id: 4, name: 'Funda de fideos', price: 1.00, stock: 8, pathImage: 'https://mercadomi.com.ec/wp-content/uploads/2024/11/77563_G.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 2, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/31187_M.jpg' },
        { id: 6, name: 'Funda de papas', price: 3.00, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65701_G.jpg' },
        { id: 7, name: 'Funda de fideos', price: 1.00, stock: 8, pathImage: 'https://mercadomi.com.ec/wp-content/uploads/2024/11/77563_G.jpg' },
        { id: 8, name: 'Funda de sal', price: 0.50, stock: 2, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/31187_M.jpg' },
    ];

    //hook useState: permite gestionar la información de los productos
    const [productsState, setProductsState] = useState<Product[]>(products);

    //función para controlar el stock de los productos
    const changeStockProduct = (id: number, quantity: number): void => {  //5
        const updateProducts = productsState.filter(item => item.id == id
            ? { ...item, stock: item.stock - quantity }
            : item);
        //Modiificar el arreglo de productos
        setProductsState(updateProducts);
    }

    return (
        <View>
            <TitleComponent title='Productos' />
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProductComponent item={item} />}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }} />
            </BodyComponent>
        </View>
    )
}
