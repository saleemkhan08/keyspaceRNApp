import {CALENDAR, DUE, OVERDUE, PAID} from 'assets/images';
import Button from 'components/Button';
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {days} from 'src/utils/string';
import {colors} from 'src/utils/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    marginHorizontal: 10,
    backgroundColor: colors.white,
    shadowOffset: {width: 10, height: -10},
    shadowColor: colors.black,
    shadowRadius: 10,
  },

  imageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    resizeMode: 'contain',
    height: 100,
  },
  statusImage: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  rightContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  text: {
    fontSize: 20,
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function RentCycle() {
  const dueInDays = 9;
  const isOverDue = dueInDays < 0;
  const isPaid = dueInDays > 5;
  const isDue = dueInDays <= 5;
  let textColor = colors.accent;
  const handlePayNow = () => {};
  if (isOverDue) {
    textColor = colors.red;
  } else if (isPaid) {
    textColor = colors.green;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={CALENDAR} style={styles.image} />
        {isOverDue ? (
          <Image source={OVERDUE} style={styles.statusImage} />
        ) : (
          isDue && <Image source={DUE} style={styles.statusImage} />
        )}
        {isPaid && <Image source={PAID} style={styles.statusImage} />}
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          {isPaid ? (
            <Text style={{...styles.text, textAlign: 'left'}}>
              All dues are cleared!
            </Text>
          ) : (
            <>
              <Text style={styles.text}>
                {`Rent & utilities bills \n${
                  isOverDue ? 'overdue by' : 'due in'
                } `}
                <Text style={{...styles.text, color: textColor}}>
                  {days(dueInDays)}
                </Text>
              </Text>
            </>
          )}
        </View>
        {isPaid ? (
          <Text style={styles.textContainer}>
            Next bill will be generated in {days(dueInDays - 5)}
          </Text>
        ) : (
          <Button
            title="PAY NOW"
            onPress={handlePayNow}
            bgColor={textColor}
            textColor={textColor}
            small
          />
        )}
      </View>
    </View>
  );
}

export default RentCycle;
