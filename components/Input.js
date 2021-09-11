import React, { useEffect, useState, useMemo } from 'react';
import { View, Picker, Alert} from 'react-native';
import {Text , TextInput , Switch,Button} from 'react-native-paper';
import { styles } from '../styles/Styles';
import Slider from '@react-native-community/slider';
import Pickers from './Pickers';
import ButtonMy from './Button';



const Input = () =>{


    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState();
    const [limite, setLimite] = useState(0);
    const [ genero, setGenero] = useState();
    const [estudate, setEstudante] = useState(false);

    const onEstudante= () => setEstudante(!estudate);


   const reset = () =>{
    setNome('')
    setIdade('')
    setLimite(0)
    setGenero('Selecione o Sexo')
    setEstudante(false)
   }

   function abrirConta(){
        if(nome==''){
            alert("Preencha os valores")
        }
        else{
            alert("Sua conta foi criada!\n\nNome: " + nome + "\nIdade: " + idade + "\nGênero: " + genero + "\nLimite: R$ " + limite + "\nEstudante:" + estudate)
        }


   }


   useEffect(()=>{

   }, [limite])



 return(
    <View>
        <Text style={styles.label}>Cadastro do Banco</Text>


        <TextInput
            label="Digite seu nome"
            style={styles.input}
            value={nome}
            onChangeText={nome => setNome(nome)}
        />

        <Picker
        style ={styles.picker}
			onValueChange={genero => setGenero(genero)}
			selectedValue={genero}
		>
            <Picker.Item label={'Selecione o Sexo'} value={'null'} />
            <Picker.Item label={'Masculino'} value={'Masculino'} />
		    <Picker.Item label={'Feminino'} value={'Feminino'} />
		</Picker>

        <TextInput
            label="Digite sua idade"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(idade) => idade ? setIdade(parseInt(idade)) : setIdade(0)}
            value={idade}
        />
        <Text style={styles.label}>Limite: {limite}</Text>
        <Slider
            style={styles.slider}
            value={limite}
            onSlidingStart={(limite) => limite ? setLimite(parseInt(limite)) : setLimite(limite + 100)}
            minimumValue={250}
            maximumValue={1000}
        />
        <View style={styles.switchBox }>
            <Text style={styles.label}>Estudante:</Text>
            <Switch style={styles.switch } value={estudate} onValueChange={onEstudante} />

        </View>

        <View >


            <ButtonMy
               text="Abrir conta"
              // onPress={() => alert("Sua conta foi criada!\n\nNome: " + nome + "\nIdade: " + idade + "\nGênero: " + genero + "\nLimite: R$ " + limite + "\nEstudante:" + estudate)}
              onPress={() => abrirConta()}
            />
            <ButtonMy
               text="Resetar"
               onPress={reset}
            />
         </View>
    </View>


  );
}



export default Input
