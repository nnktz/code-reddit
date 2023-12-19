'use client'

import { useEffect, useState } from 'react'

import { LoginModal } from '../modals/login-modal'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <LoginModal />
    </>
  )
}
