import { Routes, Route } from 'react-router-dom'

import { Home } from "../pages/Home"
import { DishesPreview } from "../pages/DishesPreview"
import { CreateDishe } from '../pages/CreateDishes'
import { UpdatedDishe } from '../pages/UpdatedDishe'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dishesPreview/:id' element={<DishesPreview/>}/>
      <Route path='/UpdatedDishe/:id' element={<UpdatedDishe/>}/>
      <Route path='/CreateDishe' element={<CreateDishe/>}/>
    </Routes>
  )
}