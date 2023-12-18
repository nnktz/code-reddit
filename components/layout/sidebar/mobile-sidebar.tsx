import {
  ActivitySquare,
  GraduationCap,
  Inbox,
  LucideIcon,
  Menu,
  Settings,
  User,
  Users,
} from 'lucide-react'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { PiChats } from 'react-icons/pi'
import { FaRegImages } from 'react-icons/fa'
import { IconType } from 'react-icons'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MobileSidebarItems } from './mobile-sidebar-items'
import { user } from '../navbar/user-button'

type Routes = {
  title: string
  route: {
    label: string
    icon: LucideIcon | IconType
    href: string
  }[]
}[]

export const MobileSidebar = () => {
  const routes: Routes = [
    {
      title: 'personal',
      route: [
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
      ],
    },
    {
      title: 'community',
      route: [
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
      ],
    },
    {
      title: 'media',
      route: [
        {
          label: 'my_photos',
          icon: FaRegImages,
          href: `members/${user.username}/photos`,
        },
        {
          label: 'my_documents',
          icon: ActivitySquare,
          href: `members/${user.username}/documents`,
        },
        {
          label: 'account_settings',
          icon: Settings,
          href: `members/${user.username}/settings`,
        },
      ],
    },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side={'left'} className="p-0">
        <MobileSidebarItems
          username={user.username}
          fullName={user.fullName}
          imageUrl={user.imageUrl}
          routes={routes}
        />
      </SheetContent>
    </Sheet>
  )
}
