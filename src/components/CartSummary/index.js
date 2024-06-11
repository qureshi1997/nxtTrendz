// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListLength = cartList.length
      let totalPrice = 0
      cartList.forEach(each => {
        totalPrice += each.price * each.quantity
      })
      return (
        <div className="cart-summary-card">
          <div className="summary-card">
            <h1 className="total-count">
              Order Total:{' '}
              <span className="counter-des">Rs {totalPrice}/-</span>
            </h1>
            <p className="items-des">{cartListLength} Items In Cart</p>
          </div>
          <button className="check-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary