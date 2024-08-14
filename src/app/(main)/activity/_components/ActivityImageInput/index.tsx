import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { Input } from '@/components/ui/input'

type ActivityImageInputProps = {
  field: ControllerRenderProps<FieldValues, string>
}

export const ActivityImageInput = ({ field }: ActivityImageInputProps) => {
  return (
    <Input
      accept=".jpg, .jpeg"
      type="file"
      multiple={false}
      onChange={(e) =>
        field.onChange(e.target.files ? e.target.files[0] : null)
      }
    />
  )
}