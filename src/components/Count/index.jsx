import { Container } from './styles'
import { useEffect, useState } from 'react'

import { Button } from '../Button'

export function Count({ onTotalPriceChange, productPrice }) {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const CalculateTotalPrice = () => {
    return count * productPrice
  }

  useEffect(() => {
    const totalPrice = CalculateTotalPrice()
    onTotalPriceChange(totalPrice)
  }, [count, onTotalPriceChange])

  const formattedValue = count < 10 ? `0${count}` : `${count}`

  return (
    <Container>
      <span onClick={handleDecrement}>-</span>
      <p>{formattedValue}</p>
      <span onClick={handleIncrement}>+</span>
    </Container>
  )
}