'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Logo } from '../logo'
import { NavbarItem } from './navbar-item'
import { Search } from './search'
import { Messages } from './messages'
import { Notifications } from './notifications'
import { Cart } from './cart'
import { UserButton } from './user-button'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[49] flex h-20 w-full items-center justify-between border-b px-[10px] shadow-sm md:px-[30px]">
      <Logo />
      <div className="hidden items-center lg:flex">
        <NavbarItem />
      </div>
      <div className="flex items-center gap-x-1">
        <Search />
        <span className="mx-1 h-9 border border-gray-300 text-muted-foreground dark:border-white/70" />
        <Messages />
        <Notifications />
        <Cart />
        <ModeToggle />
        <UserButton />
      </div>
    </nav>
  )
}
