import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 0.8rem;
  padding-right: 0.6rem;

  background: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.LIGHT_600};

  color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  > button {
    border: none;
    background: none;

    color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    
    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  > input {
    text-align: center;
    height: 3.8rem;
    width: 100%;
    border-radius: 0.8rem;
    font-size: 1.6rem;

    padding: 1.2rem;
    background: ${({ theme, $isnew }) =>
      $isnew ? 'transparent' : theme.COLORS.LIGHT_600};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;

    &::placeholder {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
