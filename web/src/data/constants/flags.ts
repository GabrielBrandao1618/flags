import lodash from 'lodash';

export class Flag {
  constructor(
    public country: string,
    public imgPath: string
  ){}
}

export const flags = [
  new Flag(
    'Brasil',
    'https://via.placeholder.com/150/f66b97'
  ),
  new Flag(
    'Argentina',
    'https://via.placeholder.com/150/5455fb'
  ),
];

export const countries = flags.map(flag => flag.country);

export function randomFlag(){
  const index = lodash.random(0, flags.length-1);
  return flags[index];
}