import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  padding:  0 13.5;
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  border: 0;
  border-radius: 1rem;

  font-weight: 500;

  /* Caso haja um icon ----------------- */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  &:disabled {
    opacity: 0.5;
  }
`