'use client'

import Link from 'next/link'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { formLoginSchema } from '@/schema/form-schema'
import { useLoginModal } from '@/hooks/use-login-modal'

import { AuthModal } from '../auth-modal'
import { BodyContentLogin } from './body-content-login'
import { FooterContentLogin } from './footer-content-login'
import { HeaderContentLogin } from './header-content-login'

export const LoginModal = () => {
  const router = useRouter()
  const { isOpen, onClose } = useLoginModal((state) => state)

  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formLoginSchema>) => {
    console.log(values)
  }

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
      disabled={form.formState.isSubmitting}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={form.handleSubmit(onSubmit)}
      title="login"
      actionLabel="login"
      description={description}
      header={<HeaderContentLogin />}
      body={<BodyContentLogin register={form.register} isLoading={form.formState.isSubmitting} />}
      footer={<FooterContentLogin reset={form.reset} />}
    />
  )
}
