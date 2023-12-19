import { z } from 'zod'

const formLoginSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export { formLoginSchema }
