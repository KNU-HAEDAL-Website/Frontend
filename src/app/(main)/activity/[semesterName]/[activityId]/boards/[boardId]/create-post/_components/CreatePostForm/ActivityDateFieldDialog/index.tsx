import { useFormContext } from 'react-hook-form'

import { Label } from '@radix-ui/react-dropdown-menu'
import { kstFormat } from '@toss/date'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { CreatePost } from '@/schema/post'

import { DateDialogTriggerButton } from './DateDialogTriggerButton'

export const ActivityDateFieldDialog = () => {
  const form = useFormContext<CreatePost>()

  return (
    <FormField
      control={form.control}
      name="activityDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center">
            <Label className="text-md w-40">활동 날짜</Label>
            <div className="w-full">
              <Dialog>
                <DateDialogTriggerButton
                  startDate={field.value.start}
                  endDate={field.value.end}
                />
                <DialogContent>
                  <DialogTitle>test</DialogTitle>
                  <DialogDescription>gg</DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex justify-end">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}
