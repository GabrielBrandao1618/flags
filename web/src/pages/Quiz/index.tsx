import {FormEvent, useState} from 'react';
import { HealthBar } from '../../components/HealthBar';
import { LoadingScreen } from '../../components/LoadingScreen';
import {TextInput} from '../../components/TextInput';

import { useFlags } from '../../hooks/useFlags';

export function Quiz(){
  const {
    isLoading, 
    randomFlag: currentFlag,
    selectRandFlag,
    countries
  } = useFlags();
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [lifes, setLifes] = useState(3);
  const [mistakenCountries, setMistakenCountries] = useState<string[]>([]);

  function handleAnswer(e: FormEvent){
    e.preventDefault();
    if(mistakenCountries.includes(answer)) return;
    if(!countries.includes(answer)) return
    if(answer === currentFlag.country){
      setScore(score+1);
      setLifes(3);
      setMistakenCountries([]);
      selectRandFlag();
    } else {
      setLifes(lifes-1);
      setMistakenCountries([...mistakenCountries, answer]);
    }
    setAnswer('');
  }

  function handleRestart(){
    setScore(0);
    setLifes(3);
    setMistakenCountries([]);
    selectRandFlag();
  }

  if(isLoading || !currentFlag) return <LoadingScreen />

  return (
    <main className="flex bg-gray-900 h-screen justify-center items-center py-4">
      <form
        onSubmit={handleAnswer}
        className="self-center flex flex-col w-full max-w-[500px] h-full"
      >
        <h1
          className="text-white font-bold text-6xl w-full text-center"
        >
          Flags
        </h1>
        <img 
          src={currentFlag.imgPath}
          alt="Uma bandeira de um país" 
          className="w-full h-auto mt-16"
        />
        <div className="flex w-full">
          {/* <input 
            type="text"
            list='countries'
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            disabled={lifes<=0}
            className="flex-1"
          /> */}
          <TextInput.Root>
            <TextInput.Input 
              placeholder="Country"
              list='countries'
            />
            <TextInput.Button
              type="submit"
            >
              Tentar
            </TextInput.Button>

          </TextInput.Root>
          <datalist id="countries">
            {countries.map(country => {
              return (
                <option 
                  value={country}
                  key={country}
                >
                  {country}
                </option>
              )
            })}
          </datalist>
        </div>
        {lifes <=0 && (
          <div>
            <p className="text-white font-bold text-xl">
              Errou! a resposta era {currentFlag.country}
            </p>
            <button
              className="bg-black text-white text-xl font-bold p-1"
              onClick={handleRestart}
            >
              Tentar de novo
            </button>
          </div>
        )}
      </form>
    </main>
  )
}