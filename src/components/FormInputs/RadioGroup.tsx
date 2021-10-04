import RadioButton from 'components/FormInputs/RadioButton';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from 'src/utils/styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    color: colors.darkBlue,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 0,
    marginEnd: 10,
  },
  radioButton: {
    marginEnd: 5,
  },
});

interface Props {
  onItemSelected: (id: string) => void;
  selectedId: string;

  items: {
    text: string;
    id: string;
  }[];
}
function RadioGroup(props: Props) {
  const {onItemSelected, items, selectedId} = props;
  return (
    <View style={styles.container}>
      {items.map(item => {
        return (
          <View style={styles.buttonContainer} key={item.id}>
            <RadioButton
              style={styles.radioButton}
              onChange={() => onItemSelected(item.id)}
              isSelected={item.id === selectedId}
            />
            <TouchableOpacity onPress={() => onItemSelected(item.id)}>
              <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

RadioGroup.defaultProps = {};

export default RadioGroup;
