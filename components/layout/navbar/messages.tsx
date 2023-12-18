import Link from 'next/link'
import { ChevronDown, Inbox } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Message } from './message'
import { PopoverWrapper } from './popover-wrapper'

export const messages = [
  {
    id: '1',
    message: 'What the hell?',
    friendName: 'Nhat Nguyen',
    sender: 'HelloKitty',
    imageUrl: '/avatar.jpg',
    isRead: false,
  },
  {
    id: '2',
    message: 'What the hell?',
    friendName: 'Nhat Nguyen',
    sender: 'HelloKitty',
    imageUrl: '/avatar.jpg',
    isRead: false,
  },
  {
    id: '3',
    message: 'What the hell?',
    friendName: 'Nhat Nguyen',
    sender: 'Nhat Nguyen',
    isRead: true,
  },
  {
    id: '4',
    message: 'What the hell?',
    friendName: 'Nhat Nguyen',
    sender: 'Nhat Nguyen',
    isRead: false,
  },
  {
    id: '5',
    message: 'What the hell?',
    friendName: 'Nhat Nguyen',
    sender: 'Nhat Nguyen',
    isRead: false,
  },
  {
    id: '6',
    message: 'What the hell?',
    friendName: 'Nhat Nguyen',
    sender: 'Nhat Nguyen',
    isRead: false,
  },
  {
    id: '7',
    message: 'What the hell?',
    friendName: 'Nhat Nguyen',
    sender: 'HelloKitty',
    imageUrl: '/avatar.jpg',
    isRead: true,
  },
  {
    id: '8',
    message: 'What the hell?',
    friendName: 'Nhat Nguyen',
    sender: 'HelloKitty',
    imageUrl: '/avatar.jpg',
    isRead: false,
  },
]

export const Messages = () => {
  const unreadMessagesCount = messages.filter((message) => !message.isRead).length

  const username = 'nhatnguyen'
  const newestMessage = '160'

  const body = (
    <>
      {messages.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          friendName={message.friendName}
          message={message.message}
          imageUrl={message.imageUrl}
          sender={message.sender}
          isRead={message.isRead}
        />
      ))}
    </>
  )

  const footer = (
    <div className="flex items-center justify-center border-t py-4">
      <Link href={`/members/${username}/messages/view/${newestMessage}`}>
        <Button variant={'link'} className="hover:no-underline hover:opacity-75">
          <p className="text-sm font-semibold text-primary">view_inbox</p>
          <ChevronDown className="ml-1 -rotate-90" />
        </Button>
      </Link>
    </div>
  )

  return (
    <PopoverWrapper
      body={body}
      footer={footer}
      count={unreadMessagesCount}
      title="messages"
      icon={Inbox}
      emptyLabel="no_any_messages"
    />
  )
}
