import { Container } from "./styles";

export function ButtonText({ name, icon: Icon, ...rest }) {
  return (
    <Container
      type='button'
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {name}
    </Container>

  )
}