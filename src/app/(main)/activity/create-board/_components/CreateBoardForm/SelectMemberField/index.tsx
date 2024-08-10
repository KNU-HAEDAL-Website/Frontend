import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { ActiveUser } from '@/types/user'

import { MultipleMemberSelect } from './MultipleMemberSelect'

const test: ActiveUser[] = [
  {
    userId: '0',
    studentNumber: 202012312312,
    userName: '김아진',
    role: '일반',
  },
  {
    userId: '1',
    studentNumber: 202012312313,
    userName: '조대성',
    role: '해구르르',
  },
  {
    userId: '2',
    studentNumber: 202012312314,
    userName: '김강민',
    role: '팀장',
  },
]

type SelectMemberFieldProps = {
  name: string
  label: string
}

export const SelectMemberField = ({ name, label }: SelectMemberFieldProps) => {
  const form = useFormContext()
  const [selectedMember, setSelectedMember] = useState<ActiveUser[]>([])

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center">
            <Label className="text-md w-40">{label}</Label>
            <FormControl className="h-8 cursor-pointer">
              <MultipleMemberSelect
                options={test}
                onChange={(members) => setSelectedMember(members)}
                value={selectedMember}
                updateField={(values) => field.onChange(values)}
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
