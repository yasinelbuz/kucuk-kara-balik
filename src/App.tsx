import Components from "./components"
import { useSite } from "./store/context"

function App() {
   const { activePage } = useSite()

   console.log((((activePage + 1) / 8) * 100 ) + "%")

  return (
    <>
      <div className="progressBar">
        <div className="progressBar-percent" style={{width:(((activePage + 1) / 15) * 100 ) + "%"}} />
      </div>
      <Components.Layout />
    </>
  )
}

export default App
