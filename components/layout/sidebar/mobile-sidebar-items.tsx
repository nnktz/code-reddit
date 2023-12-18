'use client'

import { useRouter } from 'next/navigation'
import { IconType } from 'react-icons'
import { LucideIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MobileSidebarItem } from './mobile-sidebar-item'

interface MobileSidebarItemsProps {
  username: string
  imageUrl: string
  fullName: string
  routes: {
    title: string
    route: {
      label: string
      icon: LucideIcon | IconType
      href: string
    }[]
  }[]
}

export const MobileSidebarItems = ({
  username,
  imageUrl,
  fullName,
  routes,
}: MobileSidebarItemsProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col pb-[30px]">
      <div className="mb-5 flex w-full items-center px-5 py-4 shadow-md">
        <Avatar
          onClick={() => router.push(`members/${username}`)}
          className="h-[50px] w-[50px] cursor-pointer transition hover:opacity-75"
        >
          <AvatarImage src={imageUrl} />
          <AvatarFallback>AVT</AvatarFallback>
        </Avatar>

        <div className="ml-3">
          <span
            role="button"
            onClick={() => router.push(`members/${username}`)}
            className="text-base font-semibold transition hover:opacity-75"
          >
            {fullName}
          </span>
          <p
            role="button"
            onClick={() => router.push(`members/${username}/settings`)}
            className="text-left text-muted-foreground"
          >
            my_account
          </p>
        </div>
      </div>

      <div className="flex h-full w-full flex-col overflow-y-auto">
        {routes.map((route) => (
          <MobileSidebarItem
            key={`mobile-sidebar-${route.title}`}
            title={route.title}
            route={route.route}
          />
        ))}
      </div>
    </div>
  )
}
