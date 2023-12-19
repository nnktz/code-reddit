import {
  ActivitySquare,
  FolderClosed,
  GraduationCap,
  Inbox,
  LayoutGrid,
  Settings,
  User,
  Users,
} from 'lucide-react'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { PiChats } from 'react-icons/pi'
import { FaRegImages } from 'react-icons/fa'
import { Dispatch, SetStateAction } from 'react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { RoutesSidebar } from './mobile-sidebar'
import { MobileSidebarItem } from './mobile-sidebar-item'
import { cn } from '@/lib/utils'

interface CollapsibleSidebarProps {
  user: {
    id: string
    fullName: string
    username: string
    imageUrl: string
  }
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CollapsibleSidebar = ({ user, isOpen, setIsOpen }: CollapsibleSidebarProps) => {
  const routes: RoutesSidebar = [
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
          icon: FolderClosed,
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
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={cn(!isOpen && 'mt-auto')}>
      <CollapsibleTrigger asChild>
        <Button variant={'ghost'}>
          <LayoutGrid />
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent>
        {routes.map((route) => (
          <MobileSidebarItem
            key={`collapsible-sidebar-${route.title}`}
            title={route.title}
            route={route.route}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
