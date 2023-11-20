import { Container, Form, Content, ImageUpload } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button'
import { IngredienteItem } from '../../components/IngredientsItem'
import {api} from '../../services/api'

import { SlArrowLeft } from "react-icons/sl";
import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function CreateDishe() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  
  const [ingredients, setIngredient] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const [category, setCategory] = useState(1)
  
  const [image, setImage] = useState(null)

  function handleChangeImage(event){
    const file = event.target.files[0]
    setImage(file)
    console.log(file)
  }  

  function handleAddIngredient(){
    setIngredient(prevState => [...prevState, newIngredient]);
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted){
    setIngredient(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }
  
  async function handleNewDishe(){
    if(newIngredient) {
      return alert('Um campo na área de ingredientes não foi confirmado')
    }
    console.log(image)

    if(!title || !description || !ingredients || !price || !image){
      return alert("Preencha todos os campos.")
    }
    const formData = new FormData();

    formData.append('image', image); 
    formData.append('title', title)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('category_id', category)

    ingredients.forEach((ingredients) => {
      formData.append('ingredients[]', ingredients)
    })

    await api.post('/dishes', formData,{ headers: {
      'Content-Type': 'multipart/form-data'
    }})

    alert("Prato criado com sucesso!")
  }

  return (
    <Container>
      <Header />
      <Form>
        <div className='ButtonForward'>
          <ButtonText onClick={() => navigate('/')} icon={SlArrowLeft} name={'Voltar'}></ButtonText>
        </div>

        <Content>
          <section>
            <h1>Adicionar prato</h1>
          </section>

          <div className='divPrinf'>
            <div id='imageDishe' className='SectionForms'>
              <p>Imagem do prato</p>
              <ImageUpload className='SelectImage'>
                <label htmlFor="imageFood">
                  <MdOutlineFileUpload />
                  <p>Selecione a imagem</p>
                  <input 
                  type="file" 
                  id='imageFood' 
                  onClick={handleChangeImage}
                  />
                </label>
              </ImageUpload>
            </div>

            <div id='Name' className='SectionForms'>
              <p>Nome</p>
              <Input
               type='text' 
               placeholder='Ex: Salada Martirs'
               onChange={e => setTitle(e.target.value)}
               ></Input>
            </div>

            <div id='Categories' className='SectionForms'>
              <p>Categoria</p>
              <select name="Categoria" id="selectCategory" onChange={e => setCategory(e.target.value)}>
                <option value={1}>Doces</option>
                <option value={2}>Almoço</option>
                <option value={3}>Janta</option>
                <option value={4}>Lanche</option>
                <option value={5}>Bebidas</option>
                <option value={6}>Coveniência</option>
              </select>
            </div>
          </div>

          <div className='divPrinf'>
            <div id='Ingredients' className='SectionForms'>
            <p>Ingredientes</p>
            <div id='ContentIngredients'>
              <div id='AllIngredients'>
                {
                  ingredients.map((ingredient, index) => (
                    <IngredienteItem 
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))
                }

                <IngredienteItem 
                isNew
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
                />
              </div>
            </div>
            </div>

            <div id='Price' className='SectionForms'>
              <p>Preço</p>
              <Input
               type='number' 
               placeholder='R$ 00,00'
               onChange={e => setPrice(e.target.value)}
              ></Input>
            </div>
          </div>

          <div className='SectionForms'>
            <p>Descrição</p>
            <Textarea
             type='text' 
             placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
             onChange={e => setDescription(e.target.value)}
             ></Textarea>
          </div>

          <div className='button'>
            <Button onClick={handleNewDishe} name='Criar prato'></Button>
          </div>
        </Content>
      </Form>
      <Footer />
    </Container>
  )
}