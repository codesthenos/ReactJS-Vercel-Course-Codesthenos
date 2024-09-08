'use client'

import { useState } from "react"

export function LikeButton() {
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

  return (
    <>
      <div>
        <span>{likes}</span>
      </div>
      <button onClick={addButtonHandler}>Add Like</button>
      <button onClick={quitButtonHandler}>Quit Like</button>
    </>
  )
}
