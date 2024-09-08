'use client'

import { z } from 'zod'

export const CreatePostSchema = z.object({
  postTitle: z
    .string()
    .min(1, { message: '게시글 제목을 입력해주세요.' })
    .max(50, { message: '게시글 제목은 50자 이내이어야 합니다.' }),
  postContent: z.string().min(1, { message: '게시글 내용을 입력해주세요.' }),
  imageFile: z
    .instanceof(File)
    .refine((f) => f.size < 5000000, {
      message: '이미지 파일 크기는 5MB 이하만 가능합니다.',
    })
    .refine((f) => !!f.name, {
      message: '게시글 대표 사진을 선택해주세요.',
    }),
  activityDate: z
    .object({
      start: z.date().optional(),
      end: z.date().optional(),
    })
    .refine((date) => {
      return !!date.start
    }, '활동 날짜를 선택해주세요.'),
})

export type CreatePost = z.infer<typeof CreatePostSchema>

export const CreateActivityPostSchema = CreatePostSchema.extend({
  boardId: z.number(),
}).omit({ imageFile: true })

export type CreateActivityPost = z.infer<typeof CreateActivityPostSchema>

export const CreateNoticePostSchema = z.object({
  postTitle: z
    .string()
    .min(1, { message: '게시글 제목을 입력해주세요.' })
    .max(50, { message: '게시글 제목은 50자 이내이어야 합니다.' }),
  postContent: z.string().min(1, { message: '게시글 제목을 입력해주세요.' }),
})

export type CreateNoticePost = z.infer<typeof CreateNoticePostSchema>
