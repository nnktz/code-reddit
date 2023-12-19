import { FcGoogle } from 'react-icons/fc'
import { RiGithubFill } from 'react-icons/ri'

import { ButtonLoginApi } from '@/components/button-login-api'

export const HeaderContentLogin = () => {
  return (
    <>
      <div className="my-2 flex flex-col items-center gap-y-2">
        <ButtonLoginApi icon={FcGoogle} label="continue_with_google" />
        <ButtonLoginApi icon={RiGithubFill} label="continue_with_github" />
      </div>

      <div className="flex items-center text-muted-foreground">
        <div className="flex-grow border-t border-muted-foreground" />
        <span className="mx-2 text-xs uppercase">or</span>
        <div className="flex-grow border-t border-muted-foreground" />
      </div>
    </>
  )
}
