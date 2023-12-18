'use client'

import { useRouter } from 'next/navigation'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface MessageProps {
  id: string
  message: string
  friendName: string
  sender: string
  imageUrl?: string
  isRead: boolean
}

export const Message = ({ id, message, friendName, sender, imageUrl, isRead }: MessageProps) => {
  const router = useRouter()

  return (
    <div>
      <Button
        onClick={() => router.push(`/members/${friendName}/view/${id}`)}
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
            <h4 className="text-left text-sm font-semibold">{friendName}</h4>
            <p className="text-sm font-light text-muted-foreground">
              {sender !== friendName ? (
                <>You: {message}</>
              ) : (
                <>
                  {friendName}: {message}
                </>
              )}
            </p>
          </div>
        </div>

        {!isRead && <div className="h-[10px] w-[10px] rounded-full bg-primary" />}
      </Button>
    </div>
  )
}
