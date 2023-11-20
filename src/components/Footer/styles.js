import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 2.2rem 12rem;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
  
  position: fixed;
  bottom: 0;

  background: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100} ;

  > div {
    font-size: 1.4rem;
    width: 25rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    

    svg {
      width: 2.8rem;
      height: 2.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }
`