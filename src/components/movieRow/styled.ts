
import styled from "styled-components";



export const MovieRow = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0px 0px 0px 30px;
  }
  .movieRow--left,.movieRow--right  {
    position: absolute;
    width: 40px;
    height: 250px;
    background-color: rgba(0,0,0,0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    opacity: 0;
    cursor: pointer;


    @media (max-width: 760px) {
      opacity: 1;
    }
  }
  .movieRow--left {
    left: 0;
  }
  .movieRow--right {
    right: 0;
  }
  &&:hover
  .movieRow--left:hover, &&:hover .movieRow--right:hover {
    opacity: 1;
  }
  
`

export const MovieRowListArea = styled.div`
  overflow-x:hidden ;
  padding-left: 30px;
`


export const MovieRowList = styled.div`
  transition: all ease 0.5s;
  
  
`


export const MovieRowItem = styled.div`
  display: inline-block;
  width: 180px;
  height: 250px;
  cursor: pointer;
  
  img {
    
    height: 100%;
    width: 100%;
    overflow: hidden;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }
  img:hover {
    transform: scale(1);
  }
`