import styled from "styled-components";

export const Container = styled.div`
height: 26rem;
width: 80%;
margin-top: 30.4rem;
display: flex;
justify-content: right;
align-items: center;
background: ${({ theme }) => theme.COLORS.GRADIENT_200};
color: ${({ theme }) => theme.COLORS.LIGHT_100};
border-radius: 0.3rem;
position: relative;

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  div {
    width: 38rem;
    margin-right: 8rem;
  }

  img {
    top: -14.63rem;
    left: -11rem;
    position: absolute;
    object-fit: cover;
  }

@media screen and (max-width: 1220px) {
    height: 26rem;
   
    margin-top: 27.4rem;

    div {
     font-size: 1.4rem;
     width: 18rem;
     margin-right: 5.2rem;
    }

    img {
     width: 56rem;
     top: -10.1rem;
     left: -6rem;
    }
    
  }

  @media screen and (max-width: 1218px) {
    div {
     font-size: 1.8rem;
     width: 26rem;
     margin-right: 1.2rem;
    }
  }

 @media screen and (max-width: 895px) {

  height: 16rem;
  margin-top: 17.5rem;

    div {
    font-size: 1.2rem;
    width: 22rem;
    margin-right: 1rem;
   }

    img {
    width: 32rem;
    top: -4.6rem;
    left: 1rem;
    }
  }
`