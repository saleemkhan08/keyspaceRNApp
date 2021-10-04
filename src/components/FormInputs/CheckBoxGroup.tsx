/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CheckBox from './CheckBox';
import {colors} from 'src/utils/styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'center',
  },
  verticalItem: {
    flexDirection: 'column',
  },
  horizontalItem: {
    flexDirection: 'row',
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
  onItemSelected: (ids: string[]) => void;
  selectedIds: string[];
  verticalItem?: boolean;
  color: string;
  items: {
    text: string;
    id: string;
  }[];
}
function CheckBoxGroup(props: Props) {
  const {onItemSelected, items, selectedIds, verticalItem, color} = props;
  const handleSelction = (id: string) => {
    if (selectedIds?.includes(id)) {
      onItemSelected(selectedIds?.filter(i => i !== id));
    } else {
      onItemSelected([...(selectedIds || []), id]);
    }
  };
  return (
    <View
      style={[
        styles.container,
        {justifyContent: verticalItem ? 'space-between' : 'flex-start'},
      ]}>
      {items.map(item => {
        return (
          <View
            key={item.id}
            style={[
              styles.buttonContainer,
              verticalItem ? styles.verticalItem : styles.horizontalItem,
            ]}>
            <CheckBox
              backgroundColor={color}
              style={styles.radioButton}
              onChange={() => handleSelction(item.id)}
              isSelected={selectedIds?.includes(item.id)}
            />
            <TouchableOpacity onPress={() => handleSelction(item.id)}>
              <Text style={[styles.text, {color}]}>{item.text}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

CheckBoxGroup.defaultProps = {};

export default CheckBoxGroup;
