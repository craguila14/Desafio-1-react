import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'
import MyCard from './Components/MyCard'


function App() {


  return (
    <>
      
      <Header titulo="Adopta un perrito"/>
      <div className='cards'>
      <MyCard 
        className="card"
        url="https://placedog.net/500" 
        nombre="Bartolo" 
        descripcion="Lleno de energia y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!" 
        bg="success" 
        raza="Bobtail"

      />
      <MyCard 
        className="card"
        url="https://placedog.net/499" 
        nombre="Messi" 
        descripcion="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!" 
        bg="primary" 
        raza="Husky"

      />
      <MyCard 
        className="card"
        url="https://placedog.net/501" 
        nombre="Gohan" 
        descripcion="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!" 
        bg="danger" 
        raza="Golden retriever"

      />
      <MyCard 
        className="card"
        url="https://placedog.net/498" 
        nombre="Princesa" 
        descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!" 
        bg="warning" 
        raza="Beagle"

      />
       </div> 
      <Footer/>     
       
  
    </>
  )
}

export default App
