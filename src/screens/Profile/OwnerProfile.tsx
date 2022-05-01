import React from 'react';
import {View} from 'react-native';
import UserDetails from './components/UserDetail';
import styles from './styles';

interface Props {}
function index(props: Props) {
  const {} = props;
  return (
    <View style={styles.container}>
      <UserDetails
        name="John Doe"
        photoUrl="https://randomuser.me/api/portraits/men/30.jpg"
        phoneNumber="+1-202-555-0175"
        emailId="saleem@gmail.com"
      />
    </View>
  );
}

index.defaultProps = {};

export default index;
