import {View, Image, Text, TouchableOpacity, FlatList, AsyncStorage, Alert} from 'react-native';
import MaterialFooterM3 from './../../Components/MaterialIconTextButtonsFooter/M3';
import React, {useEffect, useState} from 'react';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import styles from './styles';

export default function ListTarefaMes(){
  const [tarefaMeses, setTarefaMeses] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [idUsuario, setIdUsuario] = useState();
  const navigation = useNavigation();
  const anoHoje = 2020;
  const mesHoje = 5;



  function navigateToNew(){
    navigation.navigate('NewTarefaMes');
  }



  async function _retrieveToken(storageChave){
    try {
      const value = await AsyncStorage.getItem(storageChave);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log("Deu erro no Retrieve")
    }
  };



  async function _deleteToken(chave){
    try {
      const value = await AsyncStorage.removeItem(chave);
      if (value !== null) {}
    } catch (err) {
      console.log(err);
    }
  }



  function logoutAndDeleteToken(){
    Alert.alert("Sair", `Deseja realmente sair?`,
      [
        { text: "VOLTAR", onPress: () => {navigation.replace('ListTarefaMes', null, null)}},
        { text: "OK", onPress: () => {
          _deleteToken('@tokenUsuario')
          .then(resp => navigation.replace('AppLogin', null, null))
          .catch(err => console.log('Deu erro no delete token + '+err))
        }},
      ], { cancelable: false }
    );
  }



  function promisseTokenUsuario(){
    var promise = new Promise((resolve, reject) => {
      try{
        const retorno = _retrieveToken('@tokenUsuario');
        resolve(retorno);
      }catch(err){
        reject('Deu erro');
      }
    })

    promise.then(resultado => {
      loadTarefaMeses(resultado);
    }, erro => {
      console.log('EROOOO = '+erro)
    })
  }



  async function loadTarefaMeses(id_usuario){
    if(loading){
      return;
    }

    if((total > 0) && (tarefaMeses.length === total)){
      return;
    }

    setLoading(true);
//    const response = await api.get(`tarefa_meses/pesquisar/${mes}/${ano}`, {
    const response = await api.get(`tarefa_meses`, {
      headers: {
        Authorization: id_usuario,
      }
    });

    setTarefaMeses([...tarefaMeses, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setLoading(false);
  }



  useEffect(() => {
    promisseTokenUsuario();
  }, []);


  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <TouchableOpacity onPress={() => logoutAndDeleteToken()}>
          <MaterialCommunityIcons name="logout-variant" size={28} color="#E82041"/>
        </TouchableOpacity>
      </View>

      <MaterialFooterM3></MaterialFooterM3>

      <View style={styles.contactBox}>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {navigateToNew()}}>
            <Text style={styles.actionText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>


      <FlatList
        data={tarefaMeses}
        style={styles.incidentProperty2}
        keyExtractor={tarefaMes => String(tarefaMes.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({item: tarefaMes}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>TAREFA NOME:</Text>
            <Text style={styles.incidentValue}>{tarefaMes.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}