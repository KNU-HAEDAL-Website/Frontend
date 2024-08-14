import { ReactNode } from 'react'
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Label } from '@/components/ui/label'

type CreateBoardInputFieldProps = {
  name: string
  label: string
  children: (field: ControllerRenderProps<FieldValues, string>) => ReactNode
}

export const ActivityFormField = ({
  name,
  label,
  children,
}: CreateBoardInputFieldProps) => {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center">
            <Label className="text-md w-40">{label}</Label>
            <FormControl>{children(field)}</FormControl>
          </div>
          <div className="flex justify-end">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}