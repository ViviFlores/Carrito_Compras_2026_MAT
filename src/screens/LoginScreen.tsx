import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface define la estructura del objeto del formulario
interface FormLogin {
  email: string;
  password: string;
}

//interface define las propiedades del componente
interface Props {
  users: User[];   //arreglo de usuarios desde StackNavigator
}

export const LoginScreen = ({ users }: Props) => {
  //hook useState: permite getsionar el estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''
  });

  //hook useState: permite gestionar el estado de la contraseña
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //hook useNavigation: permite navegar de una pantalla a otra
  const navigation = useNavigation();

  //función para capturar los valores de mi formulario
  const handleChangeValue = (name: string, value: string): void => {
    //console.log(name, "  ", value);
    //función para cambiar el estado del formulario
    setFormLogin({ ...formLogin, [name]: value });
  }

  //función para verificar que exista el usuario
  const verifyUser = (): User => {
    const existUser = users.filter(user => user.email == formLogin.email && user.password == formLogin.password)[0];
    return existUser;
  }

  //función para iniciar sesión
  const handleSingIn = (): void => {
    //Verificar que todos los campos esten llenos
    if (formLogin.email == '' || formLogin.password == '') {
      //Mensaje de alerta
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }
    //Verificar si existe el usuario
    if (!verifyUser()) {
      Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
      return;
    }
    //console.log(formLogin);
    //Si todo sale bien, se carga la lista de productos
    navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Iniciar Sesión" />
      <BodyComponent>
        <Text style={stylesGlobal.titleWelcome}>Bienvenido de nuevo!</Text>
        <Text>Realiza tus compras de manera rápida y segura</Text>
        <View style={stylesGlobal.containerInput}>
          <InputComponent placeholder='Email'
            keyboardType='email-address'
            handleChangeValue={handleChangeValue}
            name='email' />
          <InputComponent placeholder='Contraseña'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='password'
            isPassword={hiddenPassword} />
          <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
            color={PRIMARY_COLOR}
            size={20}
            style={stylesGlobal.iconPassword}
            onPress={() => setHiddenPassword(!hiddenPassword)} />
        </View>
        <ButtonComponent buttonText='Iniciar' onPress={handleSingIn} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
          <Text style={stylesGlobal.textRedirect}>
            No tienes una cuenta? Regístrate ahora
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  )
}
