import ButtonDefault from "./borealis/buttondefault/ButtonDefault"
import Dropdown from "./borealis/dropdown/Dropdown"
// import Checkbox from "./borealis/form/Checkbox"
// import Range from "./borealis/form/Range"
// import Date from "./borealis/form/Date"
// import Submit from "./borealis/form/Submit"
// import Field from "./borealis/form/Field"
// import Radio from "./borealis/form/Radio"
import Form from "./borealis/form/Form"
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
        <h2>Forms</h2>
        {/* <form>
          <Checkbox />
          <Range />
          <Date />
          <Submit />
          <Field />
          <Radio />
        </form> */}
        <Form />
      </div>

    </>
  )
}

export default App
