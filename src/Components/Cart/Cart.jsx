import "./Cart.css";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
const Cart = () => {
  const {
    cart,
    id,
    products,
    deleteFromCart,
    cartQuantity,
    setCartQuantity,
    setCart,
    mode,
  } = useContext(DataContext);


  const increaseQuantity = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreasedQuantity = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) - 1,
    }));
  };

  return (
    <>
      <>
        <main className={`main-content `}>
          <div className={`container `}>
            <div
              className={`cart-layout ${
                mode.type === "Dark" && "cart-layout-result"
              }`}
            >
              <div className={`cart-section`}>
                <h2 className="section-title">Your Cart</h2>
                {Object.keys(cart).length === 0 && <h1>Cart is Empty</h1>}

                <div className="cart-items">
                  {products &&
                    products.map((product) => {
                      if (cart[product.id] > 0) {
                        return (
                          <>
                            <div className="cart-item">
                              <div className="item-content">
                                <div className="item-image pizza-bg cart-image">
                                  <img src={product.image} alt="" />
                                </div>
                                <div className="item-details">
                                  <h3 className="item-name"></h3>
                                  <p className="item-description">
                                    {product.name}
                                  </p>
                                  <p className="item-price">
                                    ${product.reviewCount * cart[product.id]}
                                  </p>
                                  <div className="item-controls">
                                    <div className="quantity-controls">
                                      <button
                                        onClick={() =>
                                          decreasedQuantity(product.id)
                                        }
                                        className="quantity-btn decrease-btn"
                                      >
                                        -
                                      </button>
                                      <span className="quantity">
                                        {cart[product.id]}
                                      </span>
                                      <button
                                        onClick={() =>
                                          increaseQuantity(product.id)
                                        }
                                        className="quantity-btn increase-btn"
                                      >
                                        +
                                      </button>
                                    </div>
                                    <button
                                      onClick={() => deleteFromCart(product.id)}
                                      className="remove-btn"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      }
                    })}
                </div>
              </div>

              <div className="cart-section">
                <h2 className="section-title">Order Summary</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>$50.00</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <span>$3.99</span>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <span>$4.40</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>$59.36</span>
                </div>

                <button className="checkout-btn">Proceed to Checkout</button>
                <button className="continue-btn">Continue Shopping</button>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
};
export default Cart;
