import { Container } from "./style"

export function Input({ icon: Icon, color, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} style={{ fill: color }} />}
      <input {...rest} />
    </Container>
  )
}