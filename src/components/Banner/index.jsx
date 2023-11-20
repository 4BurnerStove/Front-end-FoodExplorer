import { Container } from "./styles";

import foods from '../../assets/Foods.png'

export function Banner({ }) {
  return (
    <Container>
      <img src={foods} alt="" />
      <div>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>

    </Container>
  )
}