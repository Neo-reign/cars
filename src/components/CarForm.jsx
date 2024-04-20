import { useDispatch, useSelector } from 'react-redux'
import { changeName } from "../store/Index";

const CarForm = () => {
  const dispatch = useDispatch()
  const name = useSelector((state) => { 
    return state.form.name
  })
  const handleNameChange = (event) => { 
    //event.target.value
    dispatch(changeName(event.target.value))
  }
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <div className="label">Name</div>
            <input 
              className="input is-primary is-expanded"
              value={name}
              onChange={handleNameChange}
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarForm