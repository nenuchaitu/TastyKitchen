import './index.css'

const Counter = props => {
  const {quantity, incrementQuantity, decrementQuantity, testId} = props

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
        data-testid={testId.decrement}
      >
        -
      </button>
      <p className="quantity" data-testid={testId.quantity}>
        {quantity}
      </p>
      <button
        type="button"
        onClick={onIncrement}
        className="counter-button"
        data-testid={testId.increment}
      >
        +
      </button>
    </div>
  )
}

export default Counter
