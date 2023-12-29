import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import colors from '../styles/Colors';

interface DynamicSizeButtonProps {
  buttonText: string;
  onPress: () => void;
}

const DynamicSizeButton: React.FC<DynamicSizeButtonProps> = ({
  buttonText,
  onPress,
}) => {
  const buttonWidth = buttonText.length * 20;
  const buttonHeight = 40;
  const [isSelected, setIsSelected] = useState(false);

  const onPressHandler = () => {
    // Toggle the buttonClicked state
    onPress();
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {width: buttonWidth, height: buttonHeight},
        {backgroundColor: isSelected ? 'red' : 'gray'},
      ]}
      onPress={onPressHandler}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DynamicSizeButton;
