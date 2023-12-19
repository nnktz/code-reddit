'use client'

import { Button } from '@/components/ui/button'
import { useLoginModal } from '@/hooks/use-login-modal'

export const LoginButton = () => {
  const { onOpen } = useLoginModal((state) => state)

  return (
    <Button onClick={onOpen} variant={'ghost'} className="h-10 select-none">
      Login
    </Button>
  )
}
