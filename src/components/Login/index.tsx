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
    <C.Container style={{
      backgroundImage: 'url(https://scontent.fgru10-1.fna.fbcdn.net/v/t1.6435-9/51338567_577313852694858_3199475933706715136_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Cwmq-9jCcqcAX-b_N0R&_nc_ht=scontent.fgru10-1.fna&oh=00_AfDrP-O4wftjtzhFizxQalv8OU-x81GQgQMAqkVaTdTFcw&oe=63B58F96)',
      opacity: 0.9
    }}>
      <div className='formdata'>
        <form>
          <label>Nome</label>
          <input type='text' name='name' id='name' placeholder='Digite seu nome' maxLength={15} onChange={handleInput}/>
          <Link to ={'/home'}>
            <button>Login</button>
            
          </Link>
          
        </form>
      </div>
    </C.Container>
  )
}