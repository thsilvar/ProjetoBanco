import React, { useState } from 'react';
import { View } from 'react-native';

import { styles } from '../src/Styles';

const Switch = () =>{

    const [estudate, setEstudante] = useState(false);
 return(
    <View>
         <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
    </View>

 )
}

export default Switch
