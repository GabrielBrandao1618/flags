import {FormEvent, useState} from 'react';

import { countries, Flag, randomFlag } from '../data/constants/flags';

export function Quiz(){
  const [currentFlag, setCurrentFlag] = useState<Flag>(randomFlag());
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [lifes, setLifes] = useState(3);
  const [mistakenCountries, setMistakenCountries] = useState<string[]>([]);

  function pickFlag(){
    setCurrentFlag(randomFlag());
  }

  function handleAnswer(e: FormEvent){
    e.preventDefault();
    if(mistakenCountries.includes(answer)) return
    if(answer === currentFlag.country){
      setScore(score+1);
      setLifes(3);
      setMistakenCountries([]);
      pickFlag();
    } else {
      setLifes(lifes-1);
      setMistakenCountries([...mistakenCountries, answer])
    }
    setAnswer('');
  }

  return (
    <main className="flex bg-gray-900 h-screen justify-center items-center py-4">
      <form
        onSubmit={handleAnswer}
        className="self-center flex flex-col w-full max-w-[500px] h-full"
      >
        <h1
          className="text-white font-bold text-2xl"
        >
          Guess where this flag is from
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
          <button
            className="bg-black text-white text-xl font-bold p-1"
          >
            Submit
          </button>
        </div>
        {true && (
          <p className="text-white font-bold text-xl">
            Errou! a resposta era {currentFlag.country}
          </p>
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