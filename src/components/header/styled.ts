import styled from "styled-components";

export const Container = styled.div`
  header {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    background: transparent;
    transition: all ease 0.5s;
  }
  header.black {
    background-color: #111;
  }
  
  .header--logo {
    height: 25px;
  }
  .header--logo img {
    height: 100%;

  }
  .header--user {
    height: 35px;
    display: flex;
    

    a{
      font-style: none;
      text-decoration: none;
      display: flex;
      gap: 10px;
      
    }
    span {
      font-style: none;
      text-decoration: none;
      display: flex;
      align-items: center;
      color: white;
      
    }
  }
  .header--user img {
    height: 100%;
    border-radius: 10px;
  }

`

