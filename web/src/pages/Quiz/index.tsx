import {FormEvent, useState} from 'react';

import { useFlags } from '../../hooks/useFlags';

export function Quiz(){
  const {
    flags, 
    isLoading, 
    randomFlag: currentFlag,
    selectRandFlag
  } = useFlags();
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [lifes, setLifes] = useState(3);
  const [mistakenCountries, setMistakenCountries] = useState<string[]>([]);

  function handleAnswer(e: FormEvent){
    e.preventDefault();
    if(mistakenCountries.includes(answer)) return;
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

  if(isLoading) return <h1>Loading...</h1>;

  return (
    <main className="flex bg-gray-900 h-screen justify-center items-center py-4">
      <form
        onSubmit={handleAnswer}
        className="self-center flex flex-col w-full max-w-[500px] h-full"
      >
        <h1
          className="text-white font-bold text-2xl"
        >
          Advinhe de qual país é essa bandeira
        </h1>
        <img 
          src={currentFlag.imgPath}
          alt="Uma bandeira de um país" 
          className="w-full h-auto"
        />
        <div className="flex w-full">
          <input 
            type="text"
            list='countries'
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            disabled={lifes<=0}
            className="flex-1"
          />
          <datalist id="countries">
            {flags.map(flag => {
              return (
                <option 
                  value={flag.country}
                  key={flag.country}
                >
                  {flag.country}
                </option>
              )
            })}
          </datalist>
          <button
            className="bg-black text-white text-xl font-bold p-1"
          >
            Enviar
          </button>
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
      <div className="flex flex-col justify-start h-full p-4 w-48">
        <div className="flex flex-col">
          <span className="w-full text-left text-white text-xl font-bold">
            score: {score}
          </span>
          <span className="w-full text-left text-white text-xl font-bold">
            lifes: {lifes}
          </span>
        </div>
        <hr />
        {mistakenCountries.map(country => {
          return (
            <p 
              key={country}
              className="text-white text-xl font-semibold"
            >
              ❌ {country}
            </p>
          )
        })}
      </div>
    </main>
  )
}