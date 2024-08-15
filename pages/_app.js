import '@/styles/globals.css'
import Link from 'next/link';
import { useAtom } from 'jotai';
import { cartAtom } from '../store';

export default function App({ Component, pageProps }) {
  const [cart] = useAtom(cartAtom);

  return (
    <>
      <nav>
        <Link href="/">Home</Link> |
        <Link href="/products">Products</Link> |
        <Link href="/cart">Cart ({cart.length})</Link>
      </nav>
      <Component {...pageProps} />
    </>
  )
}