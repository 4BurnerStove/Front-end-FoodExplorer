import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 1.6rem;

  > svg {
    margin-right: 1.2rem;
  }
`
