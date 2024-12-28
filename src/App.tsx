import ButtonDefault from "./borealis/buttondefault/ButtonDefault"
import Dropdown from "./borealis/dropdown/Dropdown"
import Form from "./borealis/form/Form"
import Card from "./borealis/cards/Card"
import Table from "./borealis/table/Table"

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

      <div className="container dropdown-container">
        <h2>Dropdown Menu</h2>
        <div>
          <Dropdown />
        </div>
      </div>

      <div className="container">
        <h2>Form</h2>
        <Form />
      </div>

      <div className="container">
        <h2>Cards</h2>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="container">
        <h2>Table</h2>
        <Table />
      </div>

    </>
  )
}

export default App
