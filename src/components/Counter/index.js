import {Component} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <CartContext.Provider>
        <div>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
          <div>0</div>
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
        </div>
        )
      </CartContext.Provider>
    )
  }
}

export default Counter
