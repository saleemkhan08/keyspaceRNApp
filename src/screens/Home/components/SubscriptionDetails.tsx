import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fontSize} from 'src/utils/styles';
const styles = StyleSheet.create({
  detailsCard: {
    borderRadius: 20,
    width: '93%',
    padding: 20,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  roundedButton: {
    height: 40,
    borderRadius: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGreen,
    marginStart: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.sm,
  },
  container: {width: '100%'},
  rootContainer: {
    width: '100%',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  value: {
    fontSize: 16,
    color: colors.darkGrey,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
});

const data = [
  {
    title: 'Rent cycle',
    value: '5th of Every Month',
  },
  {
    title: 'Subscriptions',
    value: '3',
  },
  {
    title: 'Utilities',
    value: 'None',
  },
];

interface Props {}
function SubscriptionDetails(props: Props) {
  const {} = props;
  const handleConfigure = () => {};
  const handlePayment = () => {};
  return (
    <View style={styles.rootContainer}>
      <View style={styles.detailsCard}>
        <View style={styles.container}>
          {data.map(item => (
            <View style={styles.rowContainer} key={item.value}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={handleConfigure}
            style={[styles.roundedButton, {backgroundColor: colors.primary}]}>
            <Text style={styles.buttonText}>Configure</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePayment}
            style={[styles.roundedButton, {backgroundColor: colors.green}]}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

SubscriptionDetails.defaultProps = {};

export default SubscriptionDetails;
