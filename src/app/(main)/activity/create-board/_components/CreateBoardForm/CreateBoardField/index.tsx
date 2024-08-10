import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type CreateBoardInputFieldProps = {
  name: string
  label: string
  placeholder?: string
  type?: 'input' | 'textarea'
}

export const CreateBoardInputField = ({
  name,
  label,
  placeholder,
  type = 'input',
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
            <FormControl>
              {type === 'textarea' ? (
                <Textarea {...field} placeholder={placeholder} />
              ) : (
                <Input {...field} placeholder={placeholder} />
              )}
            </FormControl>
          </div>
          <div className="flex justify-end">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}

type CreateBoardFileFieldProps = {
  name: string
  label: string
}

export const CreateBoardFileField = ({
  name,
  label,
}: CreateBoardFileFieldProps) => {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center">
            <Label className="text-md w-40">{label}</Label>
            <FormControl className="h-8 cursor-pointer">
              <Input
                accept=".jpg, .jpeg"
                type="file"
                multiple={false}
                onChange={(e) =>
                  field.onChange(e.target.files ? e.target.files[0] : null)
                }
              />
            </FormControl>
          </div>
          <div className="flex justify-end">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  )
}
