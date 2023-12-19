'use client'

import Link from 'next/link'

export const FooterContentLogin = () => {
  return (
    <div className="flex flex-col gap-y-3 text-sm">
      <p>
        forgot_your{' '}
        <Link href={'/'} className="text-primary">
          username
        </Link>{' '}
        or{' '}
        <Link href={'/'} className="text-primary">
          password
        </Link>
      </p>
      <p>
        Nnw_to Code Reddit?{' '}
        <span role="button" onClick={() => {}} className="text-primary">
          sign_up
        </span>
      </p>
    </div>
  )
}
