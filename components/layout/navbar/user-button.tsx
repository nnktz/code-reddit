'use client'

import {
  ActivitySquare,
  Bell,
  Film,
  FolderClosed,
  Inbox,
  LogOut,
  User,
  UserCircle,
  Users,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { GiBookAura } from 'react-icons/gi'
import { PiChats } from 'react-icons/pi'
import { FaRegImages } from 'react-icons/fa'

import { cn } from '@/lib/utils'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { BadgeCount } from './badge-count'

import { notifications } from './notifications'
import { messages } from './messages'

export const user = {
  id: '1',
  fullName: 'Nhat Nguyen',
  username: 'nhatnguyen',
  imageUrl: '/avatar.jpg',
}

export const UserButton = () => {
  const router = useRouter()

  const unreadNotificationsCount = notifications.filter((message) => !message.isRead).length
  const unreadMessagesCount = messages.filter((message) => !message.isRead).length

  return (
    <Menubar className="border-none py-[14px] shadow-none">
      <MenubarMenu>
        <MenubarTrigger asChild className="cursor-pointer">
          <Button variant={'ghost'} className="hidden h-12 rounded-md md:flex">
            <p className="mr-2 text-base font-semibold text-gray-600 dark:text-white">
              {user.fullName}
            </p>
            <Avatar>
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback>AVT</AvatarFallback>
            </Avatar>
          </Button>
        </MenubarTrigger>

        <MenubarContent side="bottom" align="end">
          <div className="max-h-[500px] w-[265px] overflow-y-auto">
            <MenubarItem>
              <Button
                onClick={() => router.push(`/members/${user.username}`)}
                variant={'ghost'}
                className="h-[68px]"
              >
                <Avatar>
                  <AvatarImage src={user.imageUrl} />
                  <AvatarFallback>AVT</AvatarFallback>
                </Avatar>

                <div className="ml-2">
                  <span className="text-base font-semibold">{user.fullName}</span>
                  <p className="text-left text-muted-foreground">@{user.username}</p>
                </div>
              </Button>
            </MenubarItem>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <UserCircle className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>profile</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/profile`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>view</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/profile/edit`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>edit</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/profile/change-avatar`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>profile_photo</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <User className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>account</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/settings`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>login_information</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/settings/notifications`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>notification_settings</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/settings/profile`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>privacy</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() =>
                      router.push(`/members/${user.username}/settings/blocked-members`)
                    }
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>blocked_members</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/settings/invites`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>group_invites</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/settings/export`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>export_data</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <ActivitySquare className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>timeline</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/activity`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>posts</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-between gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <Bell className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>notifications</span>
                </div>
                <BadgeCount count={unreadNotificationsCount} className="relative" />
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/notifications`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-between py-0"
                  >
                    <span>unread</span>
                    <BadgeCount count={unreadNotificationsCount} className="relative" />
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/notifications/read`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>read</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-between gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <Inbox className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>messages</span>
                </div>
                <BadgeCount count={unreadMessagesCount} className="relative" />
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/messages`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-between py-0"
                  >
                    <span>messages</span>
                    <BadgeCount count={unreadMessagesCount} className="relative" />
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/messages/compose`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>new_messages</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <Users className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>connections</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/friends`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_connections</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/friends/requests`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>pending_requests</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <HiOutlineUserGroup className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>groups</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/groups`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_connections</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/groups/invites`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>pending_invites</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push('groups/create')}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>create_group</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <GiBookAura className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>courses</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/courses`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_courses</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/courses/certificates`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_certificates</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <PiChats className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>forums</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/forums`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_forums</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/forums/discussions`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_discussions</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/forums/replies`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_replies</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/forums/favorites`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_favorites</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <FaRegImages className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>photos</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/photos`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_photos</span>
                  </Button>
                </MenubarItem>

                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/photos/albums`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_albums</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <FolderClosed className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>documents</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/documents`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_documents</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'h-full w-full cursor-pointer justify-start gap-[5px] py-0 focus-visible:ring-0',
                )}
                hasIcon={false}
              >
                <div className="flex h-[38px] items-center">
                  <Film className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
                  <span>videos</span>
                </div>
              </MenubarSubTrigger>

              <MenubarSubContent className="min-w-[220px] max-w-[300px]">
                <MenubarItem className="p-0">
                  <Button
                    onClick={() => router.push(`/members/${user.username}/videos`)}
                    variant={'ghost'}
                    className="h-[38px] w-full justify-start py-0"
                  >
                    <span>my_videos</span>
                  </Button>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </div>

          <MenubarSeparator />

          <MenubarItem className="p-0">
            <Button onClick={() => {}} variant={'ghost'} className="w-full justify-start">
              <LogOut className="mr-2 h-[18px] w-[18px] text-muted-foreground" />
              <span>log_out</span>
            </Button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
