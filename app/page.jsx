import { LikeButton } from "./like-button"

function Header(props) {
  return (<h1>{props.title ? props.title : 'TITLE'}</h1>)
}

export default function HomePage() {
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
      <LikeButton />
    </div>
  )
}
