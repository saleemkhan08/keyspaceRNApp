/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import commonStyles from './styles';
import TextCheckBox from './TextCheckBox';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
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
  label: {
    ...commonStyles.label,
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
  items: {
    text: string;
    id: string;
  }[];
  color: string;
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
            <TextCheckBox
              color={color}
              style={styles.radioButton}
              onChange={() => handleSelction(item.id)}
              isSelected={selectedIds?.includes(item.id)}
              text={item.text}
            />
          </View>
        );
      })}
    </View>
  );
}

CheckBoxGroup.defaultProps = {};

export default CheckBoxGroup;
