'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useToast } from '@/components/ui/use-toast'
import { CreateBoard, CreateBoardSchema } from '@/schema/board'
import { createBoardAction } from '@/service/server/board/create-board'

import { CreateBoardFileField, CreateBoardInputField } from './CreateBoardField'
import { SelectMemberField } from './SelectMemberField'

type CreateBoardFromProps = {
  activityId: number
}

export const CreateBoardForm = ({ activityId }: CreateBoardFromProps) => {
  const router = useRouter()

  const {
    execute: createBoard,
    result,
    isExecuting,
  } = useAction(createBoardAction)
  const { toast } = useToast()

  const form = useForm<CreateBoard>({
    resolver: zodResolver(CreateBoardSchema),
    defaultValues: {
      activityId,
      boardName: '',
      boardIntro: '',
      imageFile: new File([], ''),
      participants: [],
    },
  })

  useEffect(() => {
    if (result.data) {
      toast({
        title: result.data.message,
        duration: 3000,
      })
      router.push('/activity')
    }
  }, [result])

  const onSubmit = (form: CreateBoard) => {
    createBoard(form)
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 pb-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CreateBoardInputField
          name="boardName"
          label="게시판 제목"
          placeholder="게시판 제목을 입력해주세요"
        />
        <CreateBoardInputField
          name="boardIntro"
          label="게시판 소개"
          type="textarea"
          placeholder="게시판 소개글을 작성해주세요"
        />
        <CreateBoardFileField name="imageFile" label="게시판 대표 사진" />
        <SelectMemberField name="participants" label="게시판 이용자" />
        <div className="flex justify-end">
          <Button type="submit" disabled={isExecuting}>
            게시판 생성하기
          </Button>
        </div>
      </form>
    </Form>
  )
}
