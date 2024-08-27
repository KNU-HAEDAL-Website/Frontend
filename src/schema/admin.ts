import { z } from 'zod'

export const ChangeRoleSchema = z.object({
  role: z.enum(['해구르르', '팀장', '일반']),
})
export type ChangeRole = z.infer<typeof ChangeRoleSchema>
