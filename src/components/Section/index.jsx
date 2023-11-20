import { useRef } from 'react'

import { Container, Content } from './styles'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export function Section({ category, children }) {
  const carousel = useRef(null)

  const handleBackClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleForwardClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }


  return (
    <Container>
      <h2>{category}</h2>
      <Content>
        <button onClick={handleBackClick} className='BackButton'><IoIosArrowBack></IoIosArrowBack></button>
        <button onClick={handleForwardClick} className='ForwardButton'><IoIosArrowForward></IoIosArrowForward></button>

        <div className='Carrousel-wrapper' ref={carousel}>
          <div className='Carrousel'>
            {children}
          </div>
        </div>
      </Content>
    </Container>
  )
}