import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {colors} from 'src/utils/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import commonStyles from './styles';

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: '100%',
    fontSize: 18,
    color: colors.darkBlue,
  },
  label: {
    ...commonStyles.label,
    marginBottom: 5,
  },
  hint: {
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  hintText: {
    fontSize: 18,
    color: colors.white,
  },
  icon: {
    fontSize: 20,
    color: colors.white,
  },
  error: {
    ...commonStyles.error,
    paddingVertical: 5,
  },
  disabled: {
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    borderColor: colors.secondary,
    color: colors.darkGrey,
  },
});
interface Props {
  control?: any;
  defaultValue?: number;
  disabled?: boolean;
  errorMessage?: string;
  hintIcon?: string;
  hintText?: string;
  label: string;
  name: string;
  placeholder: string;
  showHintOnLeft?: boolean;
  showHintOnRight?: boolean;
  type?: 'numeric' | 'default';
}
function ControllerInput(props: Props) {
  const {
    control,
    defaultValue,
    disabled,
    errorMessage,
    hintIcon,
    hintText,
    label,
    name,
    placeholder,
    showHintOnLeft,
    showHintOnRight,
    type,
  } = props;
  const dynamicColor = errorMessage ? colors.red : colors.darkBlue;

  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value, ref}}) => (
        <>
          <Text style={styles.label}>{label}</Text>
          <View
            style={[
              styles.container,
              {borderColor: dynamicColor},
              disabled ? styles.disabled : null,
            ]}>
            {showHintOnLeft && (
              <View
                style={[
                  styles.hint,
                  {
                    backgroundColor: dynamicColor,
                  },
                ]}>
                {hintIcon && (
                  <Icon
                    style={styles.icon}
                    name={hintIcon}
                    color={colors.secondary}
                  />
                )}
                <Text style={styles.hintText}>{hintText}</Text>
              </View>
            )}
            <TextInput
              ref={ref}
              editable={!disabled}
              selectTextOnFocus={!disabled}
              autoCompleteType="off"
              keyboardType={type}
              style={[styles.input, disabled ? styles.disabled : null]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value?.toString()}
              placeholder={placeholder}
              placeholderTextColor={colors.darkGrey}
            />
            {showHintOnRight && (
              <View
                style={[
                  styles.hint,
                  {
                    backgroundColor: dynamicColor,
                  },
                ]}>
                {hintIcon && (
                  <Icon
                    style={styles.icon}
                    name={hintIcon}
                    color={colors.secondary}
                  />
                )}
                {hintText && <Text style={styles.hintText}>{hintText}</Text>}
              </View>
            )}
          </View>
          <Text style={styles.error}>{errorMessage}</Text>
        </>
      )}
      defaultValue={defaultValue}
      name={name}
    />
  );
}

ControllerInput.defaultProps = {
  type: 'numeric',
};

export default ControllerInput;
