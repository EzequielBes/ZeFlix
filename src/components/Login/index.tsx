import { useState } from "react";
import { Link } from "react-router-dom";
import { useNameContextHook } from "../../context/movieContext";

import * as C from "./style";

export function InitialLogin() {
  const { setName, name } = useNameContextHook();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setName({ title: event.target.value });
  }

  

  return (
    <C.Container
      style={{
        backgroundImage:
          "url(https://1.bp.blogspot.com/-GjKJGwrzoJc/YPgn-T_sUsI/AAAAAAAAasg/dlyt5q9lnyET10yhD9jcEdzZiuWGjZAjQCLcBGAsYHQ/s1170/netflix-servico-distribuicao-jogos-mobile.jpg)",
        opacity: 0.9,
      }}
    >
      <div className="formdata">
        <form>
          <label>Entrar</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            maxLength={15}
            onChange={handleInput}
          />
          <input 
            type='password'
            name='password'
            id='password'
            placeholder="Digite sua senha"
            maxLength={10}
            
            />
          <Link to={"/home"}>
            <button>Login</button>
          </Link>
        </form>
      </div>
    </C.Container>
  );
}
