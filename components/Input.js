import React, { useState } from 'react';
import { View} from 'react-native';
import {Text , TextInput , Switch} from 'react-native-paper';
import { styles } from '../styles/Styles';
import Slider from '@react-native-community/slider';
import Pickers from './Pickers';
import Button from './Button';


const Input = () =>{

   
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState();
    const [limite, setLimite] = useState(0);
    const [ genero, setGenero] = useState();

    


    const [estudate, setEstudante] = useState(false);

    const onEstudante= () => setEstudante(!estudate);
    
    

 return(
    <View>
        <Text style={styles.label}>Cadastro do Banco</Text>
        

        <TextInput
            label="Digite seu nome"
            style={styles.input}
            value={nome}
            onChangeText={nome => setNome(nome)}
        />
        
        <Pickers/>

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

    </View>
    

  );
}


export default Input