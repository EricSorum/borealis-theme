import ButtonDefault from "./borealis/buttondefault/ButtonDefault"
import Dropdown from "./borealis/dropdown/Dropdown"

function App() {

  return (
    <>
      <div>
        <h1>Borealis Theme</h1>
      </div>

      <div className="container">
        <h2>Default Button</h2>
        <div>
          <ButtonDefault />
        </div>
      </div>

      <div className="container">
        <h2>Dropdown Menu</h2>
        <div>
          <Dropdown />
        </div>
      </div>

      <div className="container">
        <h2>Forms</h2>
        <form>

        </form>
      </div>

    </>
  )
}

export default App
