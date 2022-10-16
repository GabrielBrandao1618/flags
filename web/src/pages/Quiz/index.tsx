import {FormEvent, useState} from 'react';
import { HealthBar } from '../../components/HealthBar';
import { LoadingScreen } from '../../components/LoadingScreen';
import { MistakenCountry } from '../../components/MistakenCountry';
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
        className="self-center flex flex-col w-full max-w-[500px] h-full gap-4"
      >
        <h1
          className="text-white font-bold text-6xl w-full text-center"
        >
          Flags
        </h1>
        <span className="text-white font-bold text-xl">
          Score: {score}
        </span>
        <img 
          src={currentFlag.imgPath}
          alt="Uma bandeira de um país" 
          className="h-[300px] w-auto mt-4 rounded-md"
        />
        {lifes <= 0 && (
          <span className="text-white w-full text-center">
            Errou! a resposta era {currentFlag.country}
          </span>
        )}
        <TextInput.Root>
          <TextInput.Input 
            placeholder="Digite o nome do país dessa bandeira"
            list='countries'
            onChange={e => setAnswer(e.target.value)}
            value={answer}
            disabled={lifes <= 0}
          />
          <TextInput.Button
            type="submit"
            disabled={lifes <= 0}
          >
            Tentar
          </TextInput.Button>

        </TextInput.Root>
        <div className="flex w-full justify-center">
          <HealthBar 
            health={lifes}
          />
        </div>
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
        <div className="flex gap-2">
          {mistakenCountries.map(country => (
            <MistakenCountry 
              name={country}
              key={country}
            />
          ))}
        </div>
        {lifes <=0 && (
          <div className="flex w-full justify-end">
            <button
              className="bg-blue-900 text-white text-lg font-bold p-1 rounded"
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