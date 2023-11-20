import styled from 'styled-components'



export const Content = styled.div`

  max-width: 100%;
  margin: 5.6rem 0 1 2.8rem;
  position: relative;
  margin: 0 auto;


  .Carrousel-wrapper {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .Carrousel {
    display: flex;
    flex-flow: row nowrap;
    gap: 2.7rem;
  }

  .BackButton, .ForwardButton {
    position: absolute;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;

    cursor: pointer;
    border: none;
    width: 3%;
    background: linear-gradient(to left, transparent 0%, black 200%);
  }

  .ForwardButton {
    right: 0rem;
    left: auto;
    background: linear-gradient(to right, transparent 0%, black 200%);
  }

  > button {
       height: 100%;
       position: absolute;
       font-size: 4.2rem;
       color: ${({theme}) => theme.COLORS.LIGHT_100};
       border: none;
       background: transparent;
   }

`

export const Container = styled.section`

  > h2 {
    padding-top: 4.8rem;
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }
  
`