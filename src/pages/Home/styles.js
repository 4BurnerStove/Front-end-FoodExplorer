import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;


  .Sections {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  section:last-child {
    margin-bottom: 15.8rem;
  }
`