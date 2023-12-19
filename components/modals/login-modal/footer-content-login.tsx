'use client'

import Link from 'next/link'
import { useCallback } from 'react'

import { useLoginModal } from '@/hooks/use-login-modal'
import { useSignUpModal } from '@/hooks/use-sign-up-modal'

interface FooterContentLoginProps {
  reset: () => void
}

export const FooterContentLogin = ({ reset }: FooterContentLoginProps) => {
  const loginModal = useLoginModal((state) => state)
  const signUpModal = useSignUpModal((state) => state)

  const toggle = useCallback(() => {
    loginModal.onClose()
    reset()
    signUpModal.onOpen()
  }, [loginModal, reset, signUpModal])

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
        <span role="button" onClick={toggle} className="text-primary">
          sign_up
        </span>
      </p>
    </div>
  )
}
