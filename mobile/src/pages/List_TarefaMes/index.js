import MaterialFooterM3 from './../../Components/MaterialIconTextButtonsFooter/M3'
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState, useImperativeHandle} from 'react';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import {Feather} from '@expo/vector-icons';
import api from '../../services/api';
import styles from './styles';

export default function ListTarefaMes(){
  const navigation = useNavigation();
  const [tarefaMeses, setTarefaMeses] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const id_usuario = '1';

  function navigateToNew(){
    navigation.navigate('NewMes');
  }


  async function loadTarefaMeses(){
    if(loading){
      return;
    }

    if((total > 0) && (tarefaMeses.length === total)){
      return;
    }

    setLoading(true);
    const response = await api.get('tarefa_meses', {
      headers: {
        Authorization: id_usuario,
      }
    });

    setTarefaMeses([...tarefaMeses, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setLoading(false);
  }

  useEffect(() => {
    loadTarefaMeses();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
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