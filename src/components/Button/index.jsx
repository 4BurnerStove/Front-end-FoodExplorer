import { Container } from './styles'

export function Button({ icon: Icon, name, loading = false, ...rest }) {
  return (
    <Container
      type='button'
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {loading ? 'Carregando...' : name}
    </Container>
  )
}