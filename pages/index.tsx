import type { NextPage } from 'next'
import { MainInputsComponent } from '../src/components/inputs'

const Home: NextPage = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
      }}>
      <p>¿Qué nos puedes contar sobre ti?</p>

      <MainInputsComponent />

    </div>
  )
}

export default Home
