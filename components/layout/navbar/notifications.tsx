import Link from 'next/link'
import { Bell, ChevronDown } from 'lucide-react'

import { PopoverWrapper } from './popover-wrapper'
import { Button } from '@/components/ui/button'
import { Notification } from './notification'

export const notifications = [
  {
    id: '1',
    message: 'mentioned you',
    name: 'Nhat Nguyen',
    imageUrl: '/avatar.jpg',
    time: new Date(),
    isRead: false,
  },
  {
    id: '2',
    message: 'mentioned you',
    name: 'Nhat Nguyen',
    imageUrl: '/avatar.jpg',
    time: new Date(),
    isRead: false,
  },
  {
    id: '3',
    message: 'mentioned you',
    name: 'HelloKitty',
    time: new Date(),
    isRead: true,
  },
  {
    id: '4',
    message: 'mentioned you',
    name: 'HelloKitty',
    time: new Date(),
    isRead: false,
  },
  {
    id: '5',
    message: 'mentioned you',
    name: 'HelloKitty',
    time: new Date(),
    isRead: false,
  },
  {
    id: '6',
    message: 'mentioned you',
    name: 'HelloKitty',
    time: new Date(),
    isRead: false,
  },
  {
    id: '7',
    message: 'mentioned you',
    name: 'Nhat Nguyen',
    imageUrl: '/avatar.jpg',
    time: new Date(),
    isRead: true,
  },
  {
    id: '8',
    message: 'mentioned you',
    name: 'Nhat Nguyen',
    imageUrl: '/avatar.jpg',
    time: new Date(),
    isRead: false,
  },
]

export const Notifications = () => {
  const unreadNotificationsCount = notifications.filter((message) => !message.isRead).length

  const username = 'nhatnguyen'

  const handleAction = () => {}

  const body = (
    <>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          message={notification.message}
          name={notification.name}
          imageUrl={notification.imageUrl}
          isRead={notification.isRead}
          time={notification.time}
          username={username}
        />
      ))}
    </>
  )

  const footer = (
    <div className="flex items-center justify-center border-t py-4">
      <Link href={`members/${username}/notifications`}>
        <Button variant={'link'} className="hover:no-underline hover:opacity-75">
          <p className="text-sm font-semibold text-primary">view_notifications</p>
          <ChevronDown className="ml-1 -rotate-90" />
        </Button>
      </Link>
    </div>
  )

  return (
    <PopoverWrapper
      body={body}
      footer={footer}
      count={unreadNotificationsCount}
      title="notifications"
      icon={Bell}
      actionLabel="mark_all_as_read"
      handleAction={handleAction}
      emptyLabel="no_any_notifications"
    />
  )
}
