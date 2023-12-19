'use client'

import { useCallback } from 'react'

import { useLoginModal } from '@/hooks/use-login-modal'
import { useSignUpModal } from '@/hooks/use-sign-up-modal'

interface FooterContentSignUpProps {
  reset: () => void
}

export const FooterContentSignUp = ({ reset }: FooterContentSignUpProps) => {
  const loginModal = useLoginModal((state) => state)
  const signUpModal = useSignUpModal((state) => state)

  const toggle = useCallback(() => {
    signUpModal.onClose()
    reset()
    loginModal.onOpen()
  }, [loginModal, reset, signUpModal])

  return (
    <p className="text-sm">
      already_a_redditor?{' '}
      <span role="button" onClick={toggle} className="text-primary">
        log_in
      </span>
    </p>
  )
}
