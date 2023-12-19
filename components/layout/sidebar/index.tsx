'use client'

import {
  ActivitySquare,
  FolderClosed,
  GraduationCap,
  Inbox,
  Settings,
  User,
  Users,
} from 'lucide-react'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { PiChats } from 'react-icons/pi'
import { FaRegImages } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Hint } from '@/components/hint'
import { CollapsibleSidebar } from './collapsible-sidebar'
import { user } from '../navbar/user-button'

export const Sidebar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      label: 'my_profile',
      icon: User,
      href: `members/${user.username}/profile`,
    },
    {
      label: 'my_timeline',
      icon: ActivitySquare,
      href: `members/${user.username}/activity`,
    },
    {
      label: 'my_inbox',
      icon: Inbox,
      href: `members/${user.username}/messages`,
    },
    {
      label: 'my_groups',
      icon: HiOutlineUserGroup,
      href: `members/${user.username}/groups`,
    },
    {
      label: 'my_connections',
      icon: Users,
      href: `members/${user.username}/connections`,
    },
    {
      label: 'my_discussions',
      icon: PiChats,
      href: `members/${user.username}/discussions`,
    },
    {
      label: 'my_courses',
      icon: GraduationCap,
      href: `members/${user.username}/courses`,
    },
    {
      label: 'my_photos',
      icon: FaRegImages,
      href: `members/${user.username}/photos`,
    },
    {
      label: 'my_documents',
      icon: FolderClosed,
      href: `members/${user.username}/documents`,
    },
    {
      label: 'account_settings',
      icon: Settings,
      href: `members/${user.username}/settings`,
    },
  ]

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-full flex-col items-center bg-background px-[10px] py-3 shadow-md dark:border md:flex">
      <CollapsibleSidebar user={user} isOpen={isOpen} setIsOpen={setIsOpen} />

      {!isOpen && (
        <div className="my-auto flex flex-col gap-y-5">
          {routes.map((route) => (
            <div key={`sidebar-${route.label}`}>
              <Hint label={route.label} side="right" align="center" asChild>
                <Button
                  variant={'ghost'}
                  size={'sm'}
                  className={cn(
                    pathname === route.href &&
                      'bg-primary text-white hover:bg-blue-400 hover:text-white',
                  )}
                >
                  <route.icon className="h-6 w-6" />
                </Button>
              </Hint>
            </div>
          ))}
        </div>
      )}
    </aside>
  )
}
