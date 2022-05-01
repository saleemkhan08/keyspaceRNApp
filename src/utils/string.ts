export const days = (count: number) =>
  `${Math.abs(count)} ${Math.abs(count) === 1 ? 'day' : 'days'}`;
