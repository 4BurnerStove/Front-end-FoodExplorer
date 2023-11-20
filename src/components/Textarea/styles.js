import styled from 'styled-components'


export const Container = styled.textarea`
  width: 100%;
  height: 18rem;
  color: ${({theme }) => theme.COLORS.LIGHT_100};
  background: ${({theme }) => theme.COLORS.DARK_800};
  resize: none;

  border: none;
  border-radius: .8rem;
  
  padding: 1.9rem;
`