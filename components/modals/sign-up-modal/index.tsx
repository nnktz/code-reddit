'use client'

import Link from 'next/link'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { formRegisterSchema } from '@/schema/form-schema'
import { useSignUpModal } from '@/hooks/use-sign-up-modal'
import { useLoginModal } from '@/hooks/use-login-modal'

import { AuthModal } from '../auth-modal'
import { EmailForm } from './email-form'
import { HeaderContentLogin } from '../login-modal/header-content-login'
import { FooterContentSignUp } from './footer-content-sign-up'
import { InfoForm } from './info_form'

enum STEPS {
  EMAIL = 0,
  INFO = 1,
}

export const SignUpModal = () => {
  const router = useRouter()
  const loginModal = useLoginModal((state) => state)
  const signUpModal = useSignUpModal((state) => state)

  const [step, setStep] = useState(STEPS.EMAIL)
  const [isBack, setIsBack] = useState(false)

  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  })

  const onBack = () => {
    setStep((value) => value - 1)
  }

  const onNext = () => {
    setStep((value) => value + 1)
  }

  const toggle = useCallback(() => {
    signUpModal.onClose()
    router.refresh()
    loginModal.onOpen()
  }, [loginModal, router, signUpModal])

  const onSubmit = async (values: z.infer<typeof formRegisterSchema>) => {
    if (step !== STEPS.INFO) {
      return onNext()
    }

    console.log(values)
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'create'
    }

    return 'continue'
  }, [step])

  let title, description, headerContent, bodyContent, footerContent

  title = 'sign_up'

  description = (
    <>
      by_continuing,_you_agree_to_our{' '}
      <Link href={'/'} className="text-primary">
        user_agreement
      </Link>{' '}
      and_acknowledge_that_you_understand_the{' '}
      <Link href={'/'} className="text-primary">
        privacy_policy
      </Link>
      .
    </>
  )

  headerContent = <HeaderContentLogin />

  bodyContent = <EmailForm isLoading={form.formState.isSubmitting} register={form.register} />

  footerContent = <FooterContentSignUp reset={form.reset} />

  if (step === STEPS.INFO) {
    title = 'create_your_username_and_password'
    description =
      'Code Reddit is_anonymous,_so_your_username_is_what_you’ll_go_by_here._Choose_wisely—because_once_you_get_a_name,_you can’t_change_it.'
    headerContent = undefined
    footerContent = undefined
    bodyContent = <InfoForm isLoading={form.formState.isSubmitting} register={form.register} />
  }

  useEffect(() => {
    if (step === STEPS.INFO) {
      setIsBack(true)
    } else {
      setIsBack(false)
    }
  }, [step])

  return (
    <AuthModal
      disabled={form.formState.isSubmitting}
      isOpen={signUpModal.isOpen}
      onClose={signUpModal.onClose}
      onSubmit={form.handleSubmit(onSubmit)}
      title={title}
      actionLabel={actionLabel}
      description={description}
      header={headerContent}
      body={bodyContent}
      footer={footerContent}
      isBack={isBack}
      onBack={onBack}
    />
  )
}
