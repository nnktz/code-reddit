import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface HintProps {
  label: string
  children: React.ReactNode
  asChild?: boolean
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
}

export const Hint = ({ label, children, asChild, side, align }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>

        <TooltipContent
          className="rounded-sm bg-gray-900 px-4 py-2 text-white dark:bg-white dark:text-gray-900"
          side={side}
          align={align}
        >
          <p className="text-sm font-semibold">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
