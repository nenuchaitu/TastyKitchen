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
      <button
        type="button"
        onClick={onDecrement}
        className="counter-button"
        testid="decrement-count"
      >
        -
      </button>
      <div className="quantity" testid="active-count">
        {quantity}
      </div>
      <button
        type="button"
        onClick={onIncrement}
        className="counter-button"
        testid="increment-count"
      >
        +
      </button>
    </div>
  )
}

export default Counter
