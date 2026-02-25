import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const StackNavigator = () => {
    //datos de prueba
    const users: User[] = [
        { id: 1, name: 'Viviana Flores', email: 'vflores@gmail.com', password: '123456' },
        { id: 2, name: 'Carlos Aguas', email: 'caguas@gmail.com', password: '123456' }]

    //hook useState: permite gestionar la lista de usuarios
    const [listUsers, setListUsers] = useState<User[]>(users); //arreglo con la lista de usuarios

    //función para agregar el usuario al arreglo listUsers
    const handleAddUser = (user: User): void => {
        //modificar el estado del arreglo
        setListUsers([...listUsers, user]);
    }

    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: PRIMARY_COLOR
            }
        }}>
            <Stack.Screen name="Login"
                options={{ headerShown: false }}
                children={() => <LoginScreen users={listUsers} />} />
            <Stack.Screen name="Register"
                options={{ headerShown: false }}
                children={() => <RegisterScreen listUsers={listUsers}
                    handleAddUser={handleAddUser} />} />
            <Stack.Screen name="Home"
                options={{ headerShown: false }}
                component={HomeScreen} />
        </Stack.Navigator>
    );
}