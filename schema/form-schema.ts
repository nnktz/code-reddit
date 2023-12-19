import { z } from 'zod'

const formLoginSchema = z.object({
  username: z.string(),
  password: z.string(),
})

const formRegisterSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
})

export { formLoginSchema, formRegisterSchema }
