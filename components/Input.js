import React, { useState } from 'react';
import { View,Picker} from 'react-native';
import {Text , TextInput , Switch} from 'react-native-paper';
import { styles } from '../src/Styles';
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';

const Input = () =>{

   
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState();
    const [limite, setLimite] = useState(0);
  

      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'Masculino', value: 'Masculino'},
        {label: 'Feminino', value: 'Feminino'}
      ]);


    const [estudate, setEstudante] = useState(false);

    const onEstudante= () => setEstudante(!estudate);
    
    

 return(
    <View>
        <Text style={styles.text}>Cadastro do Banco</Text>
        

        <TextInput
            label="Digite seu nome"
            style={styles.input}
            value={nome}
            onChangeText={nome => setNome(nome)}
        />
        
        <DropDownPicker
            placeholderStyle={{
                color: "Black",
                fontWeight: "bold"
              }}
            placeholder="Selecione seu Genero"
            style={styles.genero}
            multiple={true}
            min={0}
            max={5}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />

        <TextInput
            label="Digite sua idade"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(idade) => idade ? setIdade(parseInt(idade)) : setIdade(0)}
            value={idade}
        />
        <Text style={styles.label}>Limite: {limite}</Text>
        <Slider
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