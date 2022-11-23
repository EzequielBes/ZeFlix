import styled from "styled-components";

export const Featured = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;

  @media (max-width:750px) {
    height: 90vh;
  } 
  
`
export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`
export const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 , transparent);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  

`
export const FeaturedName = styled.div`
  font-size: 60px;
  font-weight: bold;

  @media (max-width:750px) {
    font-size: 40px;
  } 

`


export const FeaturedInfo = styled.div`


  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width:750px) {
    font-size: 16px;
  } 

`

export const Points = styled.div`
  display: inline-block;
  color: #46d369;
  margin-right: 15px;

`

export const Year = styled.div`
  display: inline-block;
  margin-right: 15px;
`

export const Seasons = styled.div`
  display: inline-block;

`
export const FeaturedDesc = styled.div`
  margin-top: 15px;
  max-height: 120px;
  overflow-y: hidden;
  font-size: 20px;
  color: #999;
  max-width: 35%;

  @media (max-width:750px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }

`



export const Buttons = styled.div`
  margin-top: 15px;


  .watchButton, .listButton {
    display :inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.4s;


    @media (max-width:750px) {
    font-size: 16px;
    
    }
  }
  .watchButton:hover, .listButton:hover {
    opacity: 0.7;
  }
  .watchButton {
    background-color: white;
    color: black;

  }
  .listButton {
    background-color: #333;
    color: #CCC;
    
  }
`


export const FeaturedGenre = styled.div`
  font-size: 15px;
  margin-top: 15px;
  color: #999;

  @media (max-width:750px) {
    font-size: 14px;
    
    }

`