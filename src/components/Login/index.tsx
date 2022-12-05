import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNameContextHook } from '../../context/movieContext'

import * as C from './style' 



export function InitialLogin() {

  const {setName,name} = useNameContextHook()
  

  function handleInput(event:React.ChangeEvent<HTMLInputElement>){
    setName({title: event.target.value})
  }

  return(
    <C.Container>
      <div className='formdata'>
        <form>
          <label>Name</label>
          <input type='text' name='name' id='name' placeholder='Digite seu nome' maxLength={15} onChange={handleInput}/>
          <Link to ={'/home'}>
            <button>Login</button>
            
          </Link>
          
        </form>
      </div>
    </C.Container>
  )
}