import {FormEvent, useState} from 'react';

import {ModalsProvider, openModal} from '@mantine/modals';

import { countries, Flag, randomFlag } from '../data/constants/flags';

export function Quiz(){
  const [currentFlag, setCurrentFlag] = useState<Flag>(randomFlag());
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);

  function pickFlag(){
    setCurrentFlag(randomFlag());
  }

  function handleAnswer(e: FormEvent){
    e.preventDefault();
    if(answer === currentFlag.country){
      setScore(score+1);
    } else {
      openModal({
        title: 'Game over!!!',
        children: (
          <div>
            <p>
              Sua pontuação total foi de: {score} pontos
            </p>
            <div>
              <button>
                Começar novamente
              </button>
              <button>
                Inicio
              </button>
            </div>
          </div>
        )
      });
    }
    setAnswer('');
    pickFlag();
  }

  return (
    <ModalsProvider>
      <main className="flex flex-col bg-gray-900 h-screen justify-center">
        <form
          onSubmit={handleAnswer}
          className="self-center flex flex-col"
        >
          <h1
            className="text-white font-bold text-2xl"
          >
            Guess what this flag is
          </h1>
          <img 
            src={currentFlag.imgPath}
            alt="Uma bandeira de um país" 
            className="w-full h-auto"
          />
          <input 
            type="text"
            list='countries'
            value={answer}
            onChange={e => setAnswer(e.target.value)}
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
            className="bg-black text-white text-xl font-bold p-1 rounded self-end"
          >
            Submit
          </button>
          <span className="w-full text-center text-white font-bold">
            score: {score}
          </span>
        </form>
      </main>
    </ModalsProvider>
  )
}