import { useState } from "react"
import { AnimalShow } from "./AnimalShow"
import './App.css'

function getRandomAnimal() {
    const animals = ['cow', 'horse', 'cat', 'dog']
    return animals[Math.floor(Math.random()*animals.length)]
    
}

function App() {
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])      
    }

    const renederedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
    })

    return(
    <div className="app">
        <button onClick={handleClick}>Click on me</button>
        <div>{renederedAnimals}</div>
    </div>
    )
}

export default App