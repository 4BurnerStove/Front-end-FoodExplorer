import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    
    span {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      background: none;
      border: none;
      
      font-size: 2rem;
      cursor: pointer;
    }

    button {
      font-size: 1.4rem;
      font-weight: 500;
      padding: 1.2rem 2.4rem;
    }
`