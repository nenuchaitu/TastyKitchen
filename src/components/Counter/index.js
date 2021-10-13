import './index.css'

const Counter = props => {
  const {quantity, incrementQuantity, decrementQuantity} = props

  const onDecrement = () => {
    decrementQuantity()
  }

  const onIncrement = () => {
    incrementQuantity()
  }

  return (
    <div className="counter-container">
      <button type="button" onClick={onDecrement} className="counter-button">
        -
      </button>
      <div className="quantity">{quantity}</div>
      <button type="button" onClick={onIncrement} className="counter-button">
        +
      </button>
    </div>
  )
}

export default Counter
