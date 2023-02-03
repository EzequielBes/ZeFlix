import styled from "styled-components";

export const Container = styled.div`

  
  
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  

  .formdata {
    width: 25vw;
    height: 50vh;
    background-color: #4E4E4E;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 0.30rem;
    font-size: 1.2rem;
    font-weight: 500;
    opacity: 0.9;

    @media(max-width: 750px){
      width: 80vw;
      height: 50vh;
    }
    
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      color: black;
      
      
      
      label {
        border-bottom: 1px solid black;
      }
      input {
        border: none;
        border-radius: 0.25rem;
        height: 2rem;
        outline: 0;
        padding: 5px;
        font-size: 17px;  
        font-weight: 700;
        display: flex;
        text-align: center;
        opacity: 1;
        margin-top: 10px;
        background: #37363F;
        color: white

        
        }
        button {
          width: 4rem;
          height: 2rem;
          outline: 0;
          border: 0;
          background-color: 	#DE3535;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: all ease 0.2s;
          color: white;

          &:hover {
            filter: brightness(0.9);
          }
      }
    }
  }

`