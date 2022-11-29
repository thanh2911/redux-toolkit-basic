import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/card/cartSlice';
import { closeModal } from '../redux/modal/modalSlice';


const Modal = () => {

    const dispatch = useDispatch();

  return (
    <aside className="modal-container">
        <div className="modal">
            <h4>remove all items from your shopping cart ? </h4>
            <div className="btn-container">
                <button className="btn confirm-btn" 
                    onClick={() =>{
                        dispatch(clearCart()); // Xóa tất cả cart
                        dispatch(closeModal()); // close modal 
                    }}>
                    confirm
                </button>
                <button className="btn clear-btn" onClick={() => dispatch(closeModal())}>
                    cancel
                </button>
            </div>
        </div>
    </aside>
  )
}

export default Modal