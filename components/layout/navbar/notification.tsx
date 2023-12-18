'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { EyeOff } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Hint } from '@/components/hint'

interface NotificationProps {
  id: string
  message: string
  name: string
  imageUrl?: string
  isRead: boolean
  time: Date
  username: string
}

export const Notification = ({
  id,
  message,
  name,
  imageUrl,
  isRead,
  time,
  username,
}: NotificationProps) => {
  const router = useRouter()

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div>
      <Button
        onClick={() => router.push(`/members/${username}/activity/${id}`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variant={'ghost'}
        size={'lg'}
        className="h-[70px] w-full justify-between pl-[15px]"
      >
        <div className="flex w-full items-center">
          <Avatar>
            <AvatarImage src={imageUrl} />
            <AvatarFallback>AVT</AvatarFallback>
          </Avatar>
          <div className="ml-2 space-y-1">
            <p className="text-sm">
              {name} {message}
            </p>
            <p className="text-left text-sm font-light text-muted-foreground">
              {formatDistanceToNow(new Date(time), { addSuffix: true })}
            </p>
          </div>
        </div>

        {!isRead && (
          <>
            <div
              className={cn(
                'mr-2.5 h-[10px] w-[10px] rounded-full bg-primary',
                isHovered && 'hidden',
              )}
            />
            <div className={cn('hidden', isHovered && 'block')}>
              <Hint label="mask_as_read" side="left" align="center" asChild>
                <EyeOff className={cn('text-muted-foreground hover:text-gray-700')} />
              </Hint>
            </div>
          </>
        )}
      </Button>
    </div>
  )
}
