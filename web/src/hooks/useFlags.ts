import {useCallback, useEffect, useMemo, useState} from 'react';
import lodash from 'lodash';
import { Flag } from '../entities/Flag';
import { useFlagsQuery } from '../graphql/generated';

export function useFlags(){
  const {data, loading} = useFlagsQuery();
  const flags: Flag[] = useMemo(()=> {
    if(!data){
      return [];
    }
    return data.flags.map((flag => {
      return {
        country: flag.country,
        imgPath: flag.path.url
      } as Flag;
    }));
  }, [data]);

  const pickRand = useCallback(() => {
    const result = flags[lodash.random(0, flags.length-1)];
    return result;
  }, [data]);

  const [randomFlag, setRandomFlag] = useState(pickRand());

  const selectRandFlag = useCallback(()=> {
    setRandomFlag(pickRand());
  }, [data, randomFlag]);

  useEffect(()=> {
    setRandomFlag(pickRand());
  }, [data]);

  const isLoading = loading && !!flags

  const countries = flags.map(flag => flag.country);
  
  return {
    flags, 
    pickRand, 
    isLoading, 
    randomFlag, 
    selectRandFlag, 
    countries
  };
}