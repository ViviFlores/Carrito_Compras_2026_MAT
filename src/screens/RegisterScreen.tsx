import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGlobal } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface FormRegister {
  name: string;
  email: string;
  password: string;
}

//interface define las propiedades del componente
interface Props {
  listUsers: User[]; //arreglo
  handleAddUser: (user: User) => void; //actualizar el arreglo
}

export const RegisterScreen = ({ listUsers, handleAddUser }: Props) => {
  //hook useState: permite gestionar el estado del formulario
  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    email: '',
    password: ''
  });

  const navigation = useNavigation();

  //función para capturar los valores de mi formulario
  const handleChangeValue = (name: string, value: string) => {
    //Modificar el estado del formulario
    setFormRegister({ ...formRegister, [name]: value });
  }

  //función para verificar si existe el usuario
  const verifyUser = (): User => {
    const existUser = listUsers.filter(user => user.email == formRegister.email)[0];
    return existUser;
  }

  //función para generar los ids de los nuevos usuarios
  const getIdUser = (): number => {
    const getId = listUsers.length + 1;
    return getId;
  }

  //función para regístrarse
  const handleRegister = () => {
    //Validar que los campos esten llenos
    if (formRegister.name == '' || formRegister.email == '' || formRegister.password == '') {
      Alert.alert("Error", "Por favor, complete todos los campos")
      return;
    }

    //Valicar campo de inicio de sesión
    if (verifyUser()) {
      Alert.alert("Error", "El usuario ya se encuentra registrado");
      return;
    }

    //Registrar usuarios
    //Crear objeto user
    const newUser: User = {
      id: getIdUser(),
      name: formRegister.name,
      email: formRegister.email,
      password: formRegister.password
    }
    //agregar objeto al arreglo
    handleAddUser(newUser);
    Alert.alert("Registro", "Usuario registrado con éxito");
    //redireccionar al login
    navigation.goBack();
  }

  return (
    <View>
      <TitleComponent title='Regístrate' />
      <BodyComponent>
        <Text style={stylesGlobal.titleWelcome}>Bienvenido de nuevo!</Text>
        <Text>Realiza tus compras de manera rápida y segura</Text>
        <View style={stylesGlobal.containerInput}>
          <InputComponent placeholder='Nombre'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='name' />
          <InputComponent placeholder='Email'
            keyboardType='email-address'
            handleChangeValue={handleChangeValue}
            name='email' />
          <InputComponent placeholder='Contraseña'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='password' />
        </View>
        <ButtonComponent buttonText='Registrar' onPress={handleRegister} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={stylesGlobal.textRedirect}>
            Ya tienes una cuenta? Iniciar sesión ahora
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  )
}
