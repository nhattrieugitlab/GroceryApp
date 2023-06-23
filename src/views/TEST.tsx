import React, {useRef, useState} from 'react';
import {View, TextInput} from 'react-native';

const YourComponent = () => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const otpInputRefs = useRef([]);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text.length === 1 && index < 4) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        ref={ref => (otpInputRefs.current[0] = ref)}
        value={code[0]}
        onChangeText={text => handleCodeChange(text, 0)}
        keyboardType="numeric"
        style={{backgroundColor: 'red'}}
        maxLength={1}
      />
      <TextInput
        ref={ref => (otpInputRefs.current[1] = ref)}
        value={code[1]}
        onChangeText={text => handleCodeChange(text, 1)}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        ref={ref => (otpInputRefs.current[2] = ref)}
        value={code[2]}
        onChangeText={text => handleCodeChange(text, 2)}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        ref={ref => (otpInputRefs.current[3] = ref)}
        value={code[3]}
        onChangeText={text => handleCodeChange(text, 3)}
        keyboardType="numeric"
        maxLength={1}
      />
      <TextInput
        ref={ref => (otpInputRefs.current[4] = ref)}
        value={code[4]}
        onChangeText={text => handleCodeChange(text, 4)}
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
};

export default YourComponent;
