import { Container } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Dishes } from '../../components/Dishes'

export function DishesPreview() {
  

  return (
    <Container>
      <Header />
        <Dishes></Dishes>
      <Footer />
    </Container>
  )
}