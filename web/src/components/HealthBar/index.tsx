import {Heart} from 'phosphor-react';
import lodash from 'lodash';

export interface HealthBarProps {
  health: number;
}

export function HealthBar({health}: HealthBarProps){
  const hearts = lodash.range(1, 4).map(n => n <= health? true : false);
  return (
    <div>
      {hearts.map(fill => (
        <Heart 
          weight={fill? 'fill' : 'regular'}
          fill="#FF1818"
          size={24}
          color="#FF1818"
        />
      ))}
    </div>
  )
}