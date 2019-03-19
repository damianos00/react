import React from 'react'
import Joke from './Joke'
import lista from './listaJokow'

function JokeList() {
//map
   const owca = lista.map( el => {
    return (<Joke
       key={el.id}
       question={el.question}
       answer={el.answer}

     />)

})


    return (

        <div>

            {owca}

        </div>
    )
}


export default JokeList