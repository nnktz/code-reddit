'use client'

import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface MobileSidebarItemProps {
  title: string
  route: {
    label: string
    icon: LucideIcon | IconType
    href: string
  }[]
}

export const MobileSidebarItem = ({ route, title }: MobileSidebarItemProps) => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col px-4">
      <div className="p-3">
        <span className="text-left text-base uppercase tracking-wide text-muted-foreground">
          {title}
        </span>

        <div className="flex flex-col py-3">
          {route.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 rounded-md px-4 py-2 transition hover:opacity-75',
                pathname == item.href && 'bg-primary text-white hover:opacity-90',
              )}
            >
              <item.icon
                className={cn('h-6 w-6 text-gray-700', pathname == item.href && 'text-white')}
              />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
