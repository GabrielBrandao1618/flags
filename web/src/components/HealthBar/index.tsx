import {Heart} from 'phosphor-react';
import lodash from 'lodash';
import {clsx} from 'clsx';

export interface HealthBarProps {
  health: number;
  className?: string;
}

export function HealthBar({health, className}: HealthBarProps){
  const hearts = lodash.range(1, 4).map(n => n <= health? true : false);
  return (
    <div
      className={clsx(
        'flex',
        className
      )}
    >
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