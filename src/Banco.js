import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import Pickers from '../components/Pickers';
import Input from '../components/Input';

import { styles } from '../styles/Styles';

const Banco = () =>{
 return(
    <View style={styles.container}>
         <Input/>
         <View >
            <Button/>
         </View>
         

    </View>

 )
}

export default Banco
