import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { CreatePost } from '@/schema/post'

import { DateDialogTriggerButton } from './DateDialogTriggerButton'

export const ActivityDateFieldDialog = () => {
  const { control, setValue } = useFormContext<CreatePost>()

  return (
    <FormField
      control={control}
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
                  <DialogHeader>
                    <DialogTitle>활동 날짜 선택하기</DialogTitle>
                    <DialogDescription>
                      시작일과 종료일을 선택해주세요.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-center">
                    <Calendar
                      mode="range"
                      selected={{
                        from: field.value.start!,
                        to: field.value.end,
                      }}
                      onSelect={(range) => field.onChange(range)}
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        className="w-fit"
                        onClick={() => {
                          setValue('activityDate', {
                            start: new Date(), //TODO: field.value.start
                            end: field.value.end,
                          })
                        }}
                      >
                        저장하기
                      </Button>
                    </DialogClose>
                  </DialogFooter>
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
