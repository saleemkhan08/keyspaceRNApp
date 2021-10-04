import {colors} from 'src/utils/styles';

const bucket = require('../../../assets/bucket.png');
const groceries = require('../../../assets/grocery-cart.png');
const rent = require('../../../assets/rent.png');

export default [
  {
    key: '1',
    title: 'Rent Management',
    description:
      'Have all your rental receipts, agreements and all the utility bills in a unified place',
    image: rent,
    bgColor: colors.lightBlue,
    textColor: colors.primary,
  },
  {
    key: '2',
    title: 'Buy Groceries & More...',
    description:
      'Pay your household bills and get coupons to buy groceries and may more porducts',
    image: groceries,
    bgColor: colors.green,
    textColor: colors.white,
  },
  {
    key: '3',
    title: 'Household Services',
    description:
      'Starting from a maid, cook to all the way hiring a tutor, keyspace has you covered',
    image: bucket,
    bgColor: colors.accent,
    textColor: colors.primary,
  },
];
