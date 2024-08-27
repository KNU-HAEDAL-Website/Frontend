import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { DialogClose, DialogFooter } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { ChangeRole, ChangeRoleSchema } from '@/schema/admin'
import { ActiveUser } from '@/types/user'

import { RoleRadioGroup } from './RoleRiadoGroup'

type ChangeRoleDialogFormProps = {
  user: ActiveUser
}

export const ChangeRoleDialogForm = ({ user }: ChangeRoleDialogFormProps) => {
  const form = useForm<ChangeRole>({ resolver: zodResolver(ChangeRoleSchema) })

  const onSubmit = (values: ChangeRole) => {
    console.log(values)
  }

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
          <DialogClose asChild>
            <Button type="submit" className="w-20">
              변경하기
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  )
}
