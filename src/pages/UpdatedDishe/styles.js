import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .SelectImage {
    white-space: nowrap;
  }

  .button {
    width: 100%;
    display: flex;
    white-space: nowrap;
    gap: 2.4rem;
    margin-top: 3.2rem;
    justify-content: flex-end;

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    button {
      width: 25%;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }

  > div {
    display: flex;
    gap: 0.8rem;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    margin-top: 2.4rem;
    margin-bottom: 3.2rem;
  }
`

export const Form = styled.form`
  width: 80%;
  height: 50vh;
  margin: 22.5rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .ButtonForward {
    width: 100%;

    button {
      width: 10rem;
      justify-content: flex-start;
    }
  }

  .divPrinf {
    width: 100%;
    display: flex;
    gap: 3.2rem;

    #imageDishe {
      width: 25%;
    }

    #Name {
      width: 55%;
    }

    #Categories {
      width: 40%;

      #selectCategory {
        padding: 1.4rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border: none;
        border-radius: 0.8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        appearance: none;

        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: right 16px top 50%;
      }
    }

    #Ingredients {
      width: 140%;

      #ContentIngredients {
        width: 100%;
        border-radius: 0.8rem;
        padding: 0.5rem 1.2rem;
        background: ${({ theme }) => theme.COLORS.DARK_800};
      }

      #AllIngredients {
        width: 38%;
        display: flex;
        align-items: center;
        gap: 1.2rem;
      }
    }

    #Price {
      width: 30%;
    }
  }

  .SectionForms {
    width: 100%;
    display: flex;
    flex-direction: column;

    > p {
      margin-bottom: 1.6rem;
    }
  }

  > button {
    justify-content: flex-start;
  }
`

export const ImageUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.DARK_800};
  cursor: pointer;

  label {
    cursor: pointer;
    display: flex;
    gap: 1.2rem;
  }

  input {
    display: none;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`
