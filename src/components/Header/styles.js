import styled from 'styled-components'

export const Container = styled.header`
width: 100%;
height: 11.2rem;

display: flex;
position: fixed;
z-index: 999;

align-items: center;
justify-content: space-around;
gap: 3.2rem;

background: ${({ theme }) => theme.COLORS.DARK_600};

  > div:first-child {
    width: 30%;
    font-size: 1.4rem;
    cursor: pointer;
  }

  > div:nth-child(2) {
    padding-left: clamp(6%, 26vw, 15%);
  }

  > div:last-child {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 3.2rem;
    margin-right: 1rem;

    svg {
      cursor: pointer;
    }
  }
`
