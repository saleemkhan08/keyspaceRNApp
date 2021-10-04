import {useColorScheme} from 'react-native';

export default (stylesFunction?: (isDarkMode: boolean) => object) => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = stylesFunction ? stylesFunction(isDarkMode) : {};
  return {isDarkMode, styles};
};
