import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { carthandlerSlicerActions } from '../../store/AddToCart-slice';
const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, quantity, total, price ,id} = props.item;
   const removeItems = () => {
    dispatch(carthandlerSlicerActions.removeItemsToCart(id))
   }
   const addItems = () => {
    dispatch(carthandlerSlicerActions.addToCartItems({
      id,
      title,
      price
    }))
   }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItems}>-</button>
          <button onClick={addItems}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
