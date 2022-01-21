import React, {useState} from 'react';
import './App.css'
import { Container } from 'react-bootstrap'

function App() {

  
  const [ num1, setNum1 ] = useState();
  const [ num2, setNum2 ] = useState();
  const [ total, setTotal ] = useState('0');
  const [ reset, setReset ] = useState(false);




function Add() {
  
   setTotal(Number(num1) + Number(num2));  
}

function Subtract() {
  
   setTotal(Number(num1) - Number(num2));  
}

function Divide() {
  
    setTotal(Number(num1) / Number(num2));

   
}
function Multiply() {
     setTotal(Number(num1) * Number(num2));

   
}
function Reset() {
  setTotal(true);  
 }
  
return (
  <Container className='col-12 col-lg-4 mt-4'>
    <div className='Calculator'>
    <h1 >Shiela's Calculator</h1><br />
    <div className='inputs'>
    <h2 placeholder='0'>{total}</h2>
      <input 
      type='num'
      value={num1}
      
      onChange={e =>{
        setNum1(Number(e.target.value))
      }}
      />
      <input
      type='num'
      value={num2}
      placeholder='0'
      onChange={e =>{
        setNum2(Number(e.target.value))
      }}
      />
    </div>
      
      <button onClick={Add} >Add</button>
      <button onClick={Subtract}>Subtract</button>
      <button onClick={Divide}>Divide</button>
      <button onClick={Multiply}>Multiply</button>
      <button onClick={Reset}>Reset</button>

  </div>
  </Container>
  

 
  )
}

export default App;