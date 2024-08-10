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
  const { users, status } = useGetUsers()

  const form = useFormContext()
  const [selectedMember, setSelectedMember] = useState<User[]>([])

  if (status === 'pending') return <div>loading...</div>
  if (!users) return <div>?</div>

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
