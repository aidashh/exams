import { useDispatch, useSelector } from "react-redux";
import styles from "./Checkout.module.css";
import { LoadingIcon } from "./Icons";
import { useEffect } from "react";
import {
  decrementQuantyti,
  incrementQuantyti,
} from "../store/sclice/shopSlice";
import { getAllItem } from "../store/thunk/shopThunk";

const Checkout = () => {
  const { shop } = useSelector((store) => store.store);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllItem());
  }, []);

  const funcIncrement = (itemId) => {
    dispatch(incrementQuantyti({ id: itemId }));
    if (shop.totalPrice > 0) {
    }
  };
  const funcDecrement = (itemId) => {
    dispatch(decrementQuantyti(itemId));
  };
  const totalAllAmount = shop.reduce((acc, item) => {
    return acc + item.price * item.quantyti;
  }, 0);
  const discountedTotal = totalAllAmount > 10000 ? totalAllAmount * 0.9 : null;
  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {shop === " " ? (
          <>
            <LoadingIcon />
            <h4 style={{ color: "red" }}>Some thing went wrong</h4>
          </>
        ) : null}

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {shop.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.available}</th>
                <th>{item.price} $</th>
                <th>{item.quantyti}</th>
                <th>${Math.round(item.totalPrice)} </th>

                <th>
                  <button
                    onClick={() => funcIncrement(item.id)}
                    className={styles.actionButton}
                  >
                    +
                  </button>
                  <button
                    onClick={() => funcDecrement(item.id)}
                    className={styles.actionButton}
                    disabled={!item.totalPrice}
                  >
                    -
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Order summary</h2>
        <p>Discount:{Math.round(discountedTotal)} $ </p>
        <p>Total:{Math.round(totalAllAmount)} $ </p>
      </main>
    </div>
  );
};

export default Checkout;

// const Product = ({
//   id,
//   name,
//   availableCount,
//   price,
//   orderedQuantity,
//   total,
// }) => {
//   return (
//     <tr>
//       <td>{id}</td>
//       <td>{name}</td>
//       <td>{availableCount}</td>
//       <td>${price}</td>
//       <td>{orderedQuantity}</td>
//       <td>${total}</td>
//       <td>
//         <button className={styles.actionButton}>+</button>
//         <button className={styles.actionButton}>-</button>
//       </td>
//     </tr>
//   );
// };
