import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { ChangeRole, ChangeRoleSchema } from '@/schema/admin'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { activeUsersQuery } from '@/service/data/user'
import { changeUserRoleAction } from '@/service/server/user/change-user-role'
import { ActiveUser } from '@/types/user'

import { RoleRadioGroup } from './RoleRiadoGroup'

type ChangeRoleDialogFormProps = {
  user: ActiveUser
}

export const ChangeRoleDialogForm = ({ user }: ChangeRoleDialogFormProps) => {
  const {
    execute: changeRole,
    result,
    isExecuting,
  } = useAction(changeUserRoleAction)
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<ChangeRole>({ resolver: zodResolver(ChangeRoleSchema) })

  const onSubmit = (values: ChangeRole) => {
    changeRole({ userId: user.userId, role: values.role })
  }

  useEffect(() => {
    if (result.data?.isSuccess) {
      const { queryKey } = activeUsersQuery()

      queryClient.invalidateQueries({ queryKey })

      toast({
        title: result.data.message,
        duration: 1000,
      })

      return
    }

    if (result.data?.action === 'login') {
      toast({
        title: result.data?.message,
        duration: 2000,
        action: (
          <ToastAction
            onClick={() => router.push('/auth/login')}
            altText="로그인하기"
          >
            로그인하기
          </ToastAction>
        ),
      })

      return
    }

    if (result.data) {
      toast({
        title: result.data.message,
        duration: 2000,
      })
    }
  }, [result, toast, router])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 pt-2"
      >
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-5">
              <FormControl>
                <RoleRadioGroup
                  onChange={field.onChange}
                  disabledRole={user.role}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="submit" className="w-20" disabled={isExecuting}>
            변경하기
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
