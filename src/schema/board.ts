'use client'

import { z } from 'zod'

export const CreateBoardSchema = z.object({
  boardName: z
    .string()
    .min(1, { message: '게시판 제목을 입력해주세요.' })
    .max(30, { message: '게시판 제목은 30자 이내이어야 합니다.' }),
  boardIntro: z.string(),
  imageUrl: z.instanceof(File).refine((f) => f.size < 5000000, {
    message: '파일 크기는 5MB 이하만 가능합니다.',
  }),
  participants: z.string().array(),
})

export type CreateBoard = z.infer<typeof CreateBoardSchema>
