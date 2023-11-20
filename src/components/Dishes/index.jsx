import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content } from './styles'
import { ButtonText } from '../ButtonText'
import { Count } from '../Count';
import { Button } from '../Button';
import { Ingredients } from '../Ingredients'
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api'

export function Dishes() {
  const [data, setData] = useState([])
  const [totalPrice, setTotalPrice] = useState(data.price)
  const navigate = useNavigate()

  
  const imageURL = `${api.defaults.baseURL}/files/${data.image}`
  const params = useParams()
  

  useEffect(() => {
    async function fetchDishe(){
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDishe()
  }, [])

  console.log

  const formatPrice = (price) => {
    if (price) {
      const formattedPrice = Number(price).toFixed(2)
      return formattedPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  };

  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice)
  }

  return (
    <Container>
      <Content>
        <div>
          <ButtonText onClick={() => navigate('/')} icon={SlArrowLeft} name={'Voltar'}></ButtonText>
          <img src={imageURL}alt="" />
        </div>

        <div className='contentText'>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {
            data.ingredients && (
              <div className='ingredients'>
                {data.ingredients.map(ingredient => (
                  <Ingredients key={ingredient.name} name={ingredient.name} />
                ))}
              </div>
            )
          }
          <div className='buttons'>
            <Count productPrice={data.price} onTotalPriceChange={handleTotalPriceChange}></Count>
            <Button name={['Incluir R$', formatPrice(totalPrice)]}></Button>
            {/* <Button name='Editar prato'></Button> */}
          </div>
        </div>
      </Content>
    </Container >
  )
}