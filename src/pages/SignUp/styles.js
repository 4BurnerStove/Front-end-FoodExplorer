import styled from 'styled-components'

export const Container = styled.div`
  padding: 10rem 22.6rem;
  display: flex;
  justify-content: center;
  gap: 5%;

 color: ${({theme}) => theme.COLORS.LIGHT_100};

  h1 {
   text-align: center;
   white-space: nowrap;
 }

 display: flex;
 justify-content: center;
 align-items: center;
`

export const Form = styled.form`
  width: 90rem;
  padding: 6.4rem;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  border-radius: 2rem;

  > section {
    margin-block: 3.2rem;
  }

  button {
    margin-block: 3.2rem;
  }

`