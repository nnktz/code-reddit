'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  Activity,
  DiscAlbum,
  FileText,
  LucideIcon,
  MessageSquare,
  UserCircle2,
  Users,
} from 'lucide-react'

import { cn } from '@/lib/utils'

import { Hint } from '@/components/hint'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Separator } from '@/components/ui/separator'

interface Routes {
  label: string
  icon: LucideIcon
  href?: string
  list?: {
    label: string
    href?: string
    listItem?: {
      label: string
      href?: string
      subItem?: {
        label: string
        href?: string
        nestedSubItem?: {
          label: string
          href: string
        }[]
      }[]
    }[]
  }[]
}

const nameExamples = {
  group: 'property-rent-and-sale',
  course: 'a-life-of-happiness-and-fulfillment',
  lessons: 'modeling-rigid-objects',
  topic: 'shaping-a-model',
  about: 'about',
  callToAction: 'call-to-action',
  layout: '?layout=',
}

const routes: Routes[] = [
  {
    label: 'activity',
    icon: Activity,
    href: '/',
  },
  {
    label: 'members',
    icon: UserCircle2,
    href: '/members',
  },
  {
    label: 'groups',
    icon: Users,
    href: '/groups',
  },
  {
    label: 'forums',
    icon: MessageSquare,
    href: '/forums',
    list: [
      {
        label: 'group_forum',
        href: `/groups/${nameExamples.group}/forum/${nameExamples.group}`,
      },
      {
        label: 'Standalone Forum',
        href: '/forums/forum/mobile-application/',
      },
    ],
  },
  {
    label: 'integrations',
    icon: DiscAlbum,
    list: [
      {
        label: 'learnDash_lms',
        href: '/courses',
        listItem: [
          {
            label: 'all_courses',
            href: '/courses',
          },
          {
            label: 'course_single',
            href: `/courses/${nameExamples.course}`,
          },
          {
            label: 'lesson_single',
            href: `/lessons/${nameExamples.lessons}`,
          },
          {
            label: 'topic_single',
            href: `/topic/${nameExamples.topic}`,
          },
        ],
      },
      {
        label: 'elementor',
        href: '/forums/forum/mobile-application/',
        listItem: [
          {
            label: 'dashboard',
            href: '/dashboard',
          },
          {
            label: 'sections',
            subItem: [
              {
                label: 'about',
                nestedSubItem: [
                  {
                    label: 'about 1',
                    href: `${nameExamples.about}-1`,
                  },
                  {
                    label: 'about 2',
                    href: `${nameExamples.about}-2`,
                  },
                  {
                    label: 'about 3',
                    href: `${nameExamples.about}-3`,
                  },
                  {
                    label: 'about 4',
                    href: `${nameExamples.about}-4`,
                  },
                  {
                    label: 'about 5',
                    href: `${nameExamples.about}-5`,
                  },
                  {
                    label: 'about 6',
                    href: `${nameExamples.about}-6`,
                  },
                  {
                    label: 'about 7',
                    href: `${nameExamples.about}-7`,
                  },
                ],
              },
              {
                label: 'call_to_action',
                nestedSubItem: [
                  {
                    label: 'call_to_action 1',
                    href: `${nameExamples.callToAction}-1`,
                  },
                  {
                    label: 'call_to_action 2',
                    href: `${nameExamples.callToAction}-2`,
                  },
                  {
                    label: 'call_to_action 3',
                    href: `${nameExamples.callToAction}-3`,
                  },
                  {
                    label: 'call_to_action 4',
                    href: `${nameExamples.callToAction}-4`,
                  },
                  {
                    label: 'call_to_action 5',
                    href: `${nameExamples.callToAction}-5`,
                  },
                  {
                    label: 'call_to_action 6',
                    href: `${nameExamples.callToAction}-6`,
                  },
                  {
                    label: 'call_to_action 7',
                    href: `${nameExamples.callToAction}-7`,
                  },
                ],
              },
            ],
          },
          {
            label: 'LearnDash',
          },
        ],
      },
      {
        label: 'events_calendar_Pro',
        href: '/events/month/',
        listItem: [
          {
            label: 'calendar_view',
          },
          {
            label: 'list_view',
          },
          {
            label: 'grid_view',
          },
          {
            label: 'map_view',
          },
          {
            label: 'week_view',
          },
          {
            label: 'day_view',
          },
          {
            label: 'single_event',
          },
        ],
      },
      {
        label: 'wp_job_manage',
        href: '/events/month/',
        listItem: [
          {
            label: 'all_jobs',
          },
          {
            label: 'job_dashboard',
          },
          {
            label: 'resumes',
          },
          {
            label: 'candidates_dashboard',
          },
          {
            label: 'post_a_job',
          },
        ],
      },
      {
        label: 'woocommerce',
        href: '/events/month/',
        listItem: [
          {
            label: 'shop',
          },
          {
            label: 'product_single',
          },
          {
            label: 'cart',
          },
          {
            label: 'checkout',
          },
          {
            label: 'my_account',
          },
        ],
      },
    ],
  },
  {
    label: 'pages',
    icon: FileText,
    list: [
      {
        label: 'blog',
        listItem: [
          {
            label: 'blog_masonry',
            href: `/blog/${nameExamples.layout}masonry`,
          },
          {
            label: 'blog_list',
            href: `/blog/${nameExamples.layout}standard`,
          },
          {
            label: 'blog_grid',
            href: `/blog/${nameExamples.layout}grid`,
          },
        ],
      },
      {
        label: 'photos',
        href: 'photos',
      },
      {
        label: 'documents',
        href: 'documents',
      },
      {
        label: 'videos',
        href: 'videos',
      },
      {
        label: 'gutenberg',
        href: 'gutenberg',
      },
      {
        label: '404_page',
        href: '404-page',
      },
    ],
  },
]

export const NavbarItem = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Menubar className="border-none py-[14px] shadow-none">
      {routes.map((route) => (
        <MenubarMenu key={`navbar-${route.label}`}>
          {route.href ? (
            <MenubarTrigger asChild className="w-[74px]">
              <div className="flex flex-col">
                <Hint side="bottom" label={route.label} align="center" asChild>
                  <Button
                    variant={'ghost'}
                    onClick={() => {
                      if (typeof route.href !== 'undefined') {
                        router.push(route.href)
                      }
                    }}
                    className="h-10 py-[14px] hover:rounded-md"
                  >
                    <route.icon
                      className={cn('h-6 w-6', route.href === pathname && 'text-primary')}
                    />
                  </Button>
                </Hint>
                {route.href === pathname && (
                  <Separator className="h-[2px] translate-y-[18px] bg-primary" />
                )}
              </div>
            </MenubarTrigger>
          ) : (
            <MenubarTrigger className="w-[74px] cursor-pointer">
              <Hint side="bottom" label={route.label} align="center" asChild>
                <div
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                    }),
                    'h-10',
                  )}
                >
                  <route.icon className="h-6 w-6" />
                </div>
              </Hint>
            </MenubarTrigger>
          )}

          {route.list && (
            <MenubarContent>
              {route.list.map((routeList) => (
                <div key={`navbar-${routeList.label}`}>
                  {!routeList.listItem ? (
                    <MenubarItem className="p-0">
                      {routeList.href ? (
                        <Button
                          onClick={() => {
                            if (typeof routeList.href !== 'undefined') {
                              router.push(routeList.href)
                            }
                          }}
                          variant={'ghost'}
                          className="w-full justify-start"
                        >
                          {routeList.label}
                        </Button>
                      ) : (
                        <Button variant={'ghost'} className="w-full">
                          {routeList.label}
                        </Button>
                      )}
                    </MenubarItem>
                  ) : (
                    <MenubarSub key={`menubar-sub-${routeList.label}`}>
                      {routeList.href ? (
                        <MenubarSubTrigger
                          onClick={() => {
                            if (typeof routeList.href !== 'undefined') {
                              router.push(routeList.href)
                            }
                          }}
                          className={cn(
                            buttonVariants({
                              variant: 'ghost',
                            }),
                            'w-full cursor-pointer hover:border-none focus-visible:ring-0',
                          )}
                        >
                          {routeList.label}
                        </MenubarSubTrigger>
                      ) : (
                        <MenubarSubTrigger
                          className={cn(
                            buttonVariants({
                              variant: 'ghost',
                            }),
                            'w-full cursor-pointer hover:border-none focus-visible:ring-0',
                          )}
                        >
                          {routeList.label}
                        </MenubarSubTrigger>
                      )}

                      <MenubarSubContent>
                        {routeList.listItem.map((listItem) => (
                          <div key={`navbar-${listItem.label}`}>
                            <MenubarItem className="p-0">
                              {listItem.href ? (
                                <Button
                                  onClick={() => {
                                    if (listItem.href) {
                                      router.push(listItem.href)
                                    }
                                  }}
                                  variant={'ghost'}
                                  className="w-full justify-start"
                                >
                                  {listItem.label}
                                </Button>
                              ) : (
                                <Button variant={'ghost'}>{listItem.label}</Button>
                              )}
                            </MenubarItem>
                          </div>
                        ))}
                      </MenubarSubContent>
                    </MenubarSub>
                  )}
                </div>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  )
}
