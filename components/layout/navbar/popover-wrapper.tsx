import { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button, buttonVariants } from '@/components/ui/button'
import { Hint } from '@/components/hint'
import { BadgeCount } from './badge-count'

interface PopoverWrapperProps {
  title: string
  count: number
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel?: string
  handleAction?: () => void
  icon: LucideIcon
  emptyLabel: string
  userId: string | null
}

export const PopoverWrapper = ({
  title,
  count,
  body,
  footer,
  actionLabel,
  handleAction,
  icon: Icon,
  emptyLabel,
  userId,
}: PopoverWrapperProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Hint label="messages" side="bottom" align="center" asChild>
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'relative h-10 p-2',
            )}
          >
            <Icon />
            {userId && <BadgeCount count={count} />}
          </div>
        </Hint>
      </PopoverTrigger>

      <PopoverContent className="w-[400px] p-0 dark:bg-slate-950" side="bottom" align="end">
        <div className="relative flex w-full flex-col space-y-4 p-4 pr-0">
          <div className="flex w-full justify-between">
            <h1 className="text-lg font-semibold">{title}</h1>
            <Button
              onClick={handleAction}
              variant={'link'}
              className="transition hover:no-underline hover:opacity-75"
            >
              {actionLabel}
            </Button>
          </div>

          <div
            className={cn('flex flex-col space-y-2 overflow-y-auto', body ? 'h-[400px]' : 'h-fit')}
          >
            {body ? (
              body
            ) : (
              <div className="mr-4 rounded-sm bg-gray-400/10 px-4 py-5 dark:bg-white/5">
                <p className="text-center">{emptyLabel}.</p>
              </div>
            )}
          </div>
        </div>

        {footer}
      </PopoverContent>
    </Popover>
  )
}
