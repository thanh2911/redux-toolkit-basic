import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../redux/modal/modalSlice';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((state) => state.cart);
    // console.log({cartItems,total,amount});

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
  return (
    <section className="cart">
        <header>
            <h2>your bag</h2>
        </header>
        <div>
            {
                cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))
            }
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>${total.toFixed(2)}</span>
                </h4>
                <button 
                    className="btn clear-btn"
                    onClick={() => dispatch(openModal())}
                >clear cart</button>
            </div>
        </footer>
    </section>
  )
}

export default CartContainer