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
  new Flag(
    'Bolivia',
    'https://via.placeholder.com/150/ff55fb'
  ),
  new Flag(
    'Peru',
    'https://via.placeholder.com/150/54f5fb'
  ),
  new Flag(
    'Cuba',
    'https://via.placeholder.com/150/546ffb'
  ),
];

export const countries = flags.map(flag => flag.country).sort();

export function randomFlag(){
  const index = lodash.random(0, flags.length-1);
  return flags[index];
}