'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

import { Button, buttonVariants } from '@/components/ui/button'

type Product = {
  id: string
  name: string
  quantity: number
  imageUrl: string
  price: string
}

interface CartItemProps {
  data: Product
  onRemove: (id: string) => void
  disabled: boolean
}

export const CartItem = ({ data, onRemove, disabled }: CartItemProps) => {
  const router = useRouter()

  return (
    <div
      className={cn(
        buttonVariants({
          variant: 'ghost',
          size: 'lg',
        }),
        'h-[70px] w-full justify-between pl-[15px]',
      )}
    >
      <div className="flex w-full items-center">
        <Image
          src={data.imageUrl}
          alt={data.name}
          height={36}
          width={36}
          className="mr-2 rounded-md"
        />
        <div role="button" onClick={() => router.push(``)} className="ml-2">
          <h4 className="text-left text-sm font-semibold hover:text-primary">{data.name}</h4>
        </div>
      </div>

      <div className="flex items-center">
        <div className="text-muted-foreground">
          <span>{data.quantity}</span> x <span>{data.price}</span>
        </div>

        <Button disabled={disabled} onClick={() => onRemove(data.id)} variant={'ghost'} size={'sm'}>
          <X className="h-4 w-4 text-muted-foreground hover:text-primary" />
        </Button>
      </div>
    </div>
  )
}
