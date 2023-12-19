'use client'

import Link from 'next/link'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { formLoginSchema } from '@/schema/form-schema'
import { useLoginModal } from '@/hooks/use-login-modal'

import { AuthModal } from '../auth-modal'
import { BodyContentLogin } from './body-content-login'
import { FooterContentLogin } from './footer-content-login'

export const LoginModal = () => {
  const router = useRouter()
  const { isOpen, onClose } = useLoginModal((state) => state)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof formLoginSchema>>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {}

  const description = (
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

  return (
    <AuthModal
      disabled={isSubmitting}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="login"
      actionLabel="login"
      description={description}
      body={<BodyContentLogin register={register} isLoading={isSubmitting} />}
      footer={<FooterContentLogin />}
    />
  )
}
