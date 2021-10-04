import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors} from 'src/utils/styles';
import commonStyles from './styles';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginRight: 10,
    marginVertical: 5,
  },
  text: {
    ...commonStyles.label,
    marginTop: 0,
  },
});

interface Props {
  items: {text: string; id: string}[];
  color: string;
  selectedIds: string[];
  onItemSelected: (values: string[]) => void;
}
function BubbleSelector(props: Props) {
  const {items, color, selectedIds, onItemSelected} = props;
  const handleItemSelection = (id: string) => {
    let newValues: string[];
    if (selectedIds?.includes(id)) {
      newValues = selectedIds?.filter(val => val !== id);
    } else {
      newValues = [...selectedIds, id];
    }
    onItemSelected(newValues);
  };
  return (
    <View style={styles.container}>
      {items.map(item => {
        const isSelected = selectedIds?.includes(item.id);
        const textColor = isSelected ? colors.white : color;
        const backgroundColor = isSelected ? color : colors.white;
        return (
          <View key={item.id}>
            <TouchableOpacity
              onPress={() => handleItemSelection(item.id)}
              style={[
                styles.itemContainer,
                {borderColor: color, backgroundColor},
              ]}>
              <Text style={[styles.text, {color: textColor}]}>{item.text}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

BubbleSelector.defaultProps = {
  color: colors.darkBlue,
  selectedIds: [],
};

export default BubbleSelector;
