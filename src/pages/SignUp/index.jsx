import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Logo } from '../../components/Logo'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { api } from '../../services/api'

export function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if(!name || !email || !password) {
     return alert(`preencha todos os campos!`)
    }

    api.post("/users", {name, email, password}).then(() => {
        alert('Usuário cadastrado com sucesso')
        navigate('/')
      }
    ).catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi posssivel cadastrar")
      }
    })

  }

  return (
    <Container>
      <Logo />

      <Form>
        <h1>Crie sua conta</h1>

        <section>
          <label for="Nome">Seu nome</label>
          <Input
            id="Nome"
            type='text'
            placeholder='Exemplo: Maria da Silva'
            onChange={e => setName(e.target.value)}
          ></Input>
        </section>

        <section>
          <label for="E-mail">E-mail</label>
          <Input
            id="E-mail"
            type='text'
            placeholder='Exemplo: exemplo@exemplo.com.br'
            onChange={e => setEmail(e.target.value)}

          ></Input>
        </section>

        <section>
          <label for="Password">Senha</label>
          <Input
            id="Password"
            type='password'
            placeholder='No mínimo 6 caracteres'
            onChange={e => setPassword(e.target.value)}
          ></Input>
        </section>

        <Button  onClick={handleSignUp} name='Criar conta'></Button>

        <ButtonText onClick={() => navigate('/')} name='Já tenho uma conta'></ButtonText>
      </Form>
    </Container>
  )
}