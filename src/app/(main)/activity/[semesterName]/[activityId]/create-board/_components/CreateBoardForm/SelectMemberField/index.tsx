'use client'

import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { useGetUsers } from '@/service/data/user'
import { User } from '@/types/user'

import { MultipleMemberSelect } from './MultipleMemberSelect'

type SelectMemberFieldProps = {
  name: string
  label: string
}

export const SelectMemberField = ({ name, label }: SelectMemberFieldProps) => {
  const { users } = useGetUsers()

  const form = useFormContext()
  const [selectedMember, setSelectedMember] = useState<User[]>([])

  if (!users) return <div>유저가 없습니다.</div>

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <div className="flex h-full flex-col md:flex-row md:items-start">
            <Label className="text-md w-40 pt-2">{label}</Label>
            <FormControl className="h-8 cursor-pointer">
              <MultipleMemberSelect
                options={users}
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
