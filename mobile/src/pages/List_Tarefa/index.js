import {View, Image, Text, TouchableOpacity, FlatList, AsyncStorage} from 'react-native';
import MaterialFooterM1 from './../../Components/MaterialIconTextButtonsFooter/M2'
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import logoImg from '../../assets/logo.png';
import {Feather} from '@expo/vector-icons';
import api from '../../services/api';
import styles from './styles';

export default function ListTarefa(){
  const navigation = useNavigation();
  const [tarefas, setTarefas] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);



  function navigateToNew(){
    navigation.navigate('NewTarefa');
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



  function funcaoTeste(){
    var promise = new Promise((resolve, reject) => {
      try{
        const retorno = _retrieveToken('@tokenUsuario');
        resolve(retorno);
      }catch(err){
        reject('Deu erro');
      }
    })

    promise.then(resultado => {
      loadTarefas(resultado)
    }, erro => {
      console.log('EROOOO = '+erro)
    })
  }



  async function loadTarefas(id_usuario){
     if(loading){
      return;
    }

    if((total > 0) && (tarefas.length === total)){
      return;
    }

    setLoading(true);
    const response = await api.get('tarefas', {
      headers: {
        Authorization: id_usuario,
      }
    });

    setTarefas([...tarefas, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setLoading(false);
  }



  useEffect(() => {
    funcaoTeste();
  }, []);


  
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg}/>
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
          </Text>
        </View>

        <MaterialFooterM1></MaterialFooterM1>

        <View style={styles.contactBox}>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={() => {navigateToNew()}}>
              <Text style={styles.actionText}>Nova tarefa</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={tarefas}
          style={styles.incidentList}
          keyExtractor={tarefa => String(tarefa.id)}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          renderItem={({item: tarefa}) => (
            <View style={styles.incident}>

              <Text style={styles.incidentProperty}>{tarefa.nome}</Text>
              <Text style={styles.incidentProperty2}>{tarefa.data_criacao}</Text>

            </View>
          )}
        />
      </View>
    </View>
  );
}