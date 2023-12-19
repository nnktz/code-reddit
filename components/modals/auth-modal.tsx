'use client'

import { ElementRef, useCallback, useEffect, useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FcGoogle } from 'react-icons/fc'
import { RiGithubFill } from 'react-icons/ri'
import { HiArrowLeft } from 'react-icons/hi'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { ButtonLoginApi } from '../button-login-api'

interface AuthModalProps {
  isOpen?: boolean
  isBack?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  description?: string | React.ReactElement
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
}

export const AuthModal = ({
  isOpen,
  isBack,
  onClose,
  onSubmit,
  title,
  description,
  body,
  footer,
  actionLabel,
  disabled,
}: AuthModalProps) => {
  const closeRef = useRef<ElementRef<'div'>>(null)
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }

    onSubmit()
  }, [disabled, onSubmit])

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === closeRef.current) {
      handleClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      ref={closeRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[99] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none"
    >
      <div className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
        <div
          className={cn(
            'translate h-full duration-300',
            showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
          )}
        >
          <div className="translate relative flex h-full w-full flex-col rounded-2xl border-0 bg-background p-6 shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto">
            {/* Header */}
            <div
              className={cn(
                'relative flex w-full justify-end rounded-t',
                isBack && 'justify-between',
              )}
            >
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full border-0 p-2 transition hover:bg-slate-600/10 hover:opacity-75"
              >
                <HiArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="rounded-full border-0 p-2 transition hover:bg-slate-600/10 hover:opacity-75"
              >
                <IoMdClose size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-y-3 px-14">
              <span className="text-2xl font-bold">{title}</span>

              <span className="break-words text-sm">{description}</span>

              <div className="my-2 flex flex-col items-center gap-y-2">
                <ButtonLoginApi icon={FcGoogle} label="continue_with_google" />
                <ButtonLoginApi icon={RiGithubFill} label="continue_with_github" />
              </div>

              <div className="flex items-center text-muted-foreground">
                <div className="flex-grow border-t border-muted-foreground" />
                <span className="mx-2 text-xs uppercase">or</span>
                <div className="flex-grow border-t border-muted-foreground" />
              </div>
            </div>

            {/* Body */}
            <div className="relative flex-auto p-6 px-14">{body}</div>

            {/* Footer */}
            <div className="flex flex-col gap-2 px-14">
              {footer}

              <div className="flex w-full items-center justify-center pt-6">
                <Button
                  onClick={handleSubmit}
                  disabled={disabled}
                  className="h-12 w-full rounded-3xl text-white"
                >
                  {actionLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
