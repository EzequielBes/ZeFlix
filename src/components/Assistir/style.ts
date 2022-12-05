import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow-y: hidden;
    

  @media (max-width:750px){
    font-size: 95.5%;
  }
  .feature {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
  }
  .feature-horizontal {
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 , transparent);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
  }

  .title {
    font-size: 3.2rem;
    margin-bottom: 20px;

  }
  .box-info {
    width: 40%;
    margin-left: 50px;
    display: flex;
    flex-direction: column;

    @media (max-width:750px){
      width: 60%;
      font-size: 93.5%;
      margin-left: 10px;
      
    }
      
    

    span {
      color: gray;
    }
    .info {
      display: flex;
      flex-direction: column;
    }span:first-child {
      margin-bottom: 20px;
    }
    .genres {
      margin-top: 2rem;
      margin-bottom: 1.4rem;
    }


    button {
      width: 7rem;
      height: 3rem;
      border: 0;
      border-radius: 0.25rem;

      font-size: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;

      cursor: pointer;
      
      
      &:hover {
        filter: brightness(0.5);
        
      }
    }
    @media (max-width:750px){
     .title {
      font-size: 1.5rem;
     }
     .box-info {
      width: 80%;
     }
      
    }
  }
  
`
