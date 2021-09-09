import React, { useState } from 'react';
import { View,Picker} from 'react-native';
import { styles } from '../styles/Styles';


const Pickers = () =>{


    const [ genero, setGenero] = useState();

    

 return(
    <View>
        <Picker
        style ={styles.picker}
			onValueChange={genero => setGenero(genero)}
			selectedValue={genero}
		>
            <Picker.Item label={'Selecione o Sexo'} value={'null'} />
            <Picker.Item label={'Masculino'} value={'Masculino'} />
		    <Picker.Item label={'Feminino'} value={'Feminino'} />
		</Picker>
     
    </View>
    

  );
}


export default Pickers