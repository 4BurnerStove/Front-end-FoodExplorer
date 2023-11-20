import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`
export const Content = styled.div`
  height: 55vh;
  margin-block: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28%;

  color: ${({theme}) => theme.COLORS.LIGHT_100};
  width: 80%;

  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      width: 10rem;
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 4.2rem;
      justify-content: flex-start;
    }
  }

  .buttons {
    gap: 3.3rem;
    width: 50%;
    display: flex;
    justify-content: flex-start;
  }

  .contentText {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;

    h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    > p {
      font-size: 2.4rem;
      line-height: 140%;
      font-weight: 300;
      width: 85rem;
    }
  }
  
  .ingredients {
    display: flex;
    align-items: center;
    padding: 1.4rem;
    gap: 1.2rem;
  }

  img {
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      width: 40rem;
      height: 40rem;
  }
`