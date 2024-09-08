'use client'

import { useState } from 'react'

function Header(props) {
  return (<h1>{props.title ? props.title : 'TITLE'}</h1>)
}

export default function HomePage() {
  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }

  const quitLike = () => {
    setLikes(likes - 1)
  }

  const addButtonHandler = () => {
    addLike()
  }

  const quitButtonHandler = () => {
    quitLike()
  }

  const names = ['Codesthenos', 'Ataraxia', 'Sara', 'Sara']

  return (
    <div>
      <Header />
      <Header title="Codesthenos"/>
      <Header title="ReactJS-Vercel-Course" />

      <ul>
        {names.map((name, i=0) => (
          <li key={`${i+1}${name}`}>{`User ${i+1}: ${name}`}</li>
        ))}
      </ul>
      <div>
        <span>{likes}</span>
      </div>
      <button onClick={addButtonHandler}>Add Like</button>
      <button onClick={quitButtonHandler}>Quit Like</button>
    </div>
  )
}
