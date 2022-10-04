import {FormEvent, useState} from 'react';
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
    }
    pickFlag();
  }

  return (
    <main className="flex flex-col bg-gray-900">
      <form
        onSubmit={handleAnswer}
      >
        <h1>
          Guess what this flag is
        </h1>
        <img 
          src={currentFlag.imgPath}
          alt="Uma bandeira de um país" 
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
        <button>
          Submit
        </button>
        <span>
          score: {score}
        </span>
      </form>
    </main>
  )
}