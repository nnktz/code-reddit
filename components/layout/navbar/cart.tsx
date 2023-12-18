'use client'

import { useEffect, useState, useTransition } from 'react'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { PopoverWrapper } from './popover-wrapper'
import { CartItem } from './cart-item'
import { Button } from '@/components/ui/button'
import { toast } from 'react-toastify'

interface CartItem {
  id: string
  name: string
  quantity: number
  imageUrl: string
  price: string
}

const cartData = [
  {
    id: '1',
    name: 'Super Watch 1',
    quantity: 1,
    imageUrl: '/avatar.jpg',
    price: '$165.00',
  },
  {
    id: '2',
    name: 'Super Watch 2',
    quantity: 1,
    imageUrl: '/avatar.jpg',
    price: '$165.00',
  },
  {
    id: '3',
    name: 'Super Watch 3',
    quantity: 1,
    imageUrl: '/avatar.jpg',
    price: '$165.00',
  },
  {
    id: '4',
    name: 'Super Watch 4',
    quantity: 1,
    imageUrl: '/avatar.jpg',
    price: '$165.00',
  },
  {
    id: '5',
    name: 'Super Watch 5',
    quantity: 1,
    imageUrl: '/avatar.jpg',
    price: '$165.00',
  },
  {
    id: '6',
    name: 'Super Watch 6',
    quantity: 1,
    imageUrl: '/avatar.jpg',
    price: '$165.00',
  },
  {
    id: '7',
    name: 'Super Watch 7',
    quantity: 1,
    imageUrl: '/avatar.jpg',
    price: '$165.00',
  },
]

export const Cart = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [cart, setCart] = useState(cartData || [])

  const calculateSubtotal = (cartItems: CartItem[]) => {
    const total = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return acc + price
    }, 0)

    return `$${total.toFixed(2)}`
  }

  const [subtotal, setSubtotal] = useState(calculateSubtotal(cartData))

  const onRemove = (id: string) => {
    startTransition(() => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id))
      toast.success('removed_successfully')
    })
  }

  useEffect(() => {
    setSubtotal(calculateSubtotal(cart))
  }, [cart])

  let body, footer

  body = (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} data={item} disabled={isPending} onRemove={onRemove} />
      ))}
    </>
  )

  footer = (
    <div className="flex items-center justify-between border-t p-4">
      <p className="text-sm tracking-wide text-muted-foreground">
        <strong>subtotal</strong>: <span>{subtotal}</span>
      </p>

      <Button onClick={() => router.push('/checkout')}>checkout</Button>
    </div>
  )

  if (!cart || cart.length === 0) {
    body = undefined
    footer = undefined
  }

  return (
    <div className="hidden md:block">
      <PopoverWrapper
        body={body}
        footer={footer}
        count={cart.length}
        title="shopping_cart"
        icon={ShoppingCart}
        actionLabel={cart && cart.length > 0 ? 'view_cart' : undefined}
        handleAction={cart && cart.length > 0 ? () => router.push('/cart') : undefined}
        emptyLabel="no_products_in_cart"
      />
    </div>
  )
}
