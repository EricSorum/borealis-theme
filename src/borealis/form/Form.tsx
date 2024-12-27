import './Form.css'

export default function Form() {
  return (
    <form>

<div className="field">
      <label>Text Field</label>
      <input type="text" defaultValue="Field value"/>
    </div>

      <div className="checkbox">
        <label>Checkbox</label>
        <input type="checkbox" checked readOnly></input>
      </div>

      <div className="range">
      <label>Range</label>
      <input type="range"></input>
    </div>

      <div className="radio">
      <fieldset>
      <legend>Radio selection fieldset</legend>
        <label>Selection</label>
        <input type="radio" />
      </fieldset>
    </div>

    <div className="date">
      <label>Date</label>
      <input type="date" value="2024-12-31" readOnly></input>
    </div>

    <div className="submit">
      <button className="borealis" type="submit">Submit</button>
    </div>
    
    </form>

  )
}