import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.DARK_900};
  margin-bottom: .8rem;
  border-radius: 1rem;

   input {
    padding: 1.8rem;

    width: 100%;
    height: 4.8rem;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    background: transparent;
    border: none;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }

   svg {
    margin-left: 1.2rem;
  }

`