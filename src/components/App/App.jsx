import { useState, useEffect } from 'react'
import './App.css'
import Button from '../Button/Button'

function App() {
  const [value,setValue]= useState(1)
  const [quote,setQuote]= useState("")
  const handleIncrease = () =>{
    setValue(value => value + 1)
  }
  const handleDecrease = () =>{
    setValue(value => value - 1)
  }

  useEffect(()=>{
    fetch(`https://breakingbadapi.com/api/quotes/${value}`)
    .then(res => res.json())
    .then(data => setQuote(data[0]));
    console.log(quote);
  }, [value]);

  return (
    <div className="quote-shower">
    <Button className = "button button-increase" text="Next Quote" action={handleIncrease}/>
      <Button className = "button button-decrease" text="Previous Quote" action={handleDecrease}/>
      <div className='quote'>
        <span className="quote__index">{value}</span>
        <p className="quote__author">{quote.author}</p>
        <p className="quote__quote">"{quote.quote}"</p>
      </div>
    {value < 2 ? <p>Es menor que dos</p> :  <p>Es mayor que dos</p>}
    </div>
  )
}

export default App
