import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost, addCar } from "../store/Index";

const CarForm = () => {
  const dispatch = useDispatch()
  const { name, cost }= useSelector((state) => { 
    return {
      name: state.form.name,
      cost: state.form.cost
    }
  })
  const handleNameChange = (event) => { 
    //event.target.value
    dispatch(changeName(event.target.value))
  }
  
  const handleCostChange = (event) => { 
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost))
  }
  
  const handleSubmit = (e) => { 
    event.preventDefault()
    dispatch(addCar({name: name, cost: cost}))
  }
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
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
          <div className="field">
            <div className="label">Cost</div>
            <input 
              className="input is-primary is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="Button is-link">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarForm