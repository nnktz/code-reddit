import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const Logo = () => {
  return (
    <Link href={'/'} className="select-none">
      <div className="flex items-center transition hover:opacity-75">
        <div className="rounded-ful shrink-0 p-1 md:shrink">
          <Image
            src={'/logo.png'}
            alt="logo"
            height={40}
            width={40}
            className="sm:h-[68px] sm:w-[68px]"
          />
        </div>

        <div className={cn('flex items-center gap-x-2.5 sm:gap-x-4', font.className)}>
          <span className="h-6 border border-gray-300 text-muted-foreground dark:border-white/70 sm:mx-1 sm:h-9" />
          <div className="text-sm font-bold leading-none tracking-wide text-gray-700 dark:text-white/90 sm:text-xl">
            <p>Code</p>
            <p>Reddit</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
