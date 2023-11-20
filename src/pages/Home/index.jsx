import { api } from '../../services/api'

import { Container, Main } from "./styles";
import { Header } from '../../components/Header'
import { Section } from "../../components/Section";
import { Banner } from "../../components/Banner";
import { DisheCard} from "../../components/DisheCard";
import { Footer } from "../../components/Footer"
import { useEffect, useState } from "react";


export function Home() {
  const [ dishes, setDishes ] = useState([])
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    async function showDishes(){
      const response = await api.get(`/dishes`)
      setDishes(response.data)
    }

    async function showSections(){
      const response = await api.get(`/category`)
      setCategories(response.data)
    }

    showSections()
    showDishes()
  }, [])

  return (
    <Container>
      <Header/>
      <Main>
        <Banner/>

        <div className="Sections">
          {categories.map(category => {
            const categoryDishes = dishes.filter(dishe => dishe.category_id === category.id);

    
            if (categoryDishes.length > 0) {
              return (
                <Section key={String(category.id)} data={category}>
                  {categoryDishes.map(dishe => (
                    <DisheCard 
                    id={String(dishe.id)}
                    key={String(dishe.id)} 
                    data={dishe}></DisheCard>
                  ))}
                </Section>
              );
            }
          })}
        </div>
        <Footer></Footer>
      </Main>
    </Container>
  )
}


