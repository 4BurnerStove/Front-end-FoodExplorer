import styled from 'styled-components'

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 10rem 22.6rem;
  display: flex;
  justify-content: center;
  gap: 5%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  h1 {
    text-align: center;
    white-space: nowrap;
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 6.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 2rem;

  > section {
    margin-block: 3.2rem;
  }

  button {
    margin-block: 3.2rem;
  }
`
