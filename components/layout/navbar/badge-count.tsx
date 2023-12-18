import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface BadgeCountProps {
  count: number
  className?: string
}

export const BadgeCount = ({ count = 0, className }: BadgeCountProps) => {
  return (
    <Badge
      className={cn(
        'absolute right-0 top-0 h-5 rounded-full px-[6px] py-[1px] text-[9px] font-semibold dark:text-white',
        className,
      )}
    >
      {count}
    </Badge>
  )
}
