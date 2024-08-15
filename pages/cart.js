import { useAtom } from 'jotai';
import { cartAtom } from '../store';

export default function Cart() {
  const [cart] = useAtom(cartAtom);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>Price: ${item.price.toFixed(2)}</p>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}