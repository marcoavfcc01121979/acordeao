import { useState } from 'react';
import { data } from './data'
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(data)

  console.log(setQuestions)
  return (
    <div className="container">
      <h3>questoes e resposta sobre login</h3>
      <section className="info">
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />
        })}
      </section>
    </div>
  );
}

export default App;
