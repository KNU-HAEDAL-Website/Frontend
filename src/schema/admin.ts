import { z } from 'zod'

export const ChangeRoleSchema = z.object({
  role: z.enum(['해구르르', '팀장', '일반']),
})
export type ChangeRole = z.infer<typeof ChangeRoleSchema>

export const AddSemesterSchema = z.object({
  year: z.string().regex(/^20[0-9]{2}$/, {
    message: '잘못된 연도 입력입니다.',
  }),
  term: z.enum(['1', '2'], {
    errorMap: () => ({
      message: '1학기, 2학기 중에 하나를 입력해주세요.',
    }),
  }),
})
export type AddSemester = z.infer<typeof AddSemesterSchema>

const AddActivitySchema = z.object({
  activityName: z.string(),
})
export type AddActivity = z.infer<typeof AddActivitySchema>
