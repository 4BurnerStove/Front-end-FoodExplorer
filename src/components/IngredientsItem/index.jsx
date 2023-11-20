import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

export function IngredienteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input
        type='text'
        value={value}
        readOnly={!isNew}
        placeholder='Adicionar'
        {...rest}
      />
      
      <button
        type='button'
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}