import {X} from 'phosphor-react';

export interface MistakenCountryProps {
  name: string;
}

export function MistakenCountry(props: MistakenCountryProps){
  return (
    <div className="flex items-center gap-1">
      <X 
        color="#FF1818"
        size={20}
      />
      <span className="text-red-900">
        {props.name}
      </span>
    </div>
  )
}