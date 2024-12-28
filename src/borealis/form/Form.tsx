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
          <legend>Radio Buttons</legend>
          <label>Selection</label>
          <input type="radio" name="radios" defaultChecked />
          <label>Selection</label>
          <input type="radio" name="radios" />
          <label>Selection</label>
          <input type="radio" name="radios" />
        </fieldset>
      </div>

      <div className="date">
        <label>Date</label>
        <input type="date" value="2024-12-31" readOnly></input>
      </div>

      <div className="time">
        <label>Time</label>
        <input type="time" />
      </div>

      <div className="select">
        <label>Select</label>
        <select>
          <option value="">-- Choose an option --</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      </div>

      <div className="">
        <div>Radio Cards</div>
        <fieldset>
          <legend>Select an option</legend>
          <div className="radio-card-group radio">
            <label className="radio-card">
              <div>
                <h3>Option 1</h3>
                <span>Information on this option</span>
                <input type="radio" className="radio" name="radio-cards" defaultChecked/>
              </div>
            </label>

            <label className="radio-card radio">
              <div>
                <h3>Option 2</h3>
                <span>Information on this option</span>
                <input type="radio" className="radiop" name="radio-cards" />
              </div>
            </label>

            <label className="radio-card radio">
              <div>
                <h3>Option 3</h3>
                <span>Information on this option</span>
                <input type="radio" className="radio" name="radio-cards" />
              </div>
            </label>
          </div>
          </fieldset>
        </div>
    
      <div className="submit">
        <button className="borealis" type="submit">Submit</button>
      </div>
    
    </form>

  )
}