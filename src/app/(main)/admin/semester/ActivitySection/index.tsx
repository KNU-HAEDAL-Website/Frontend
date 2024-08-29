'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useGetSemesters } from '@/service/data/semester'

import { AdminLayout } from '~admin/_components/AdminLayout'

import { ActivityContent } from './ActivityContent'

export const ActivitySection = () => {
  const { semesters, status } = useGetSemesters()

  if (status === 'pending') return <div className="px-20">loading...</div>

  return (
    <AdminLayout title="활동 관리">
      <Accordion type="single" collapsible className="w-full">
        {semesters.map((semester) => (
          <AccordionItem
            value={semester.semesterName}
            key={semester.semesterId}
          >
            <AccordionTrigger className="text-md font-semibold">
              {semester.semesterName}
            </AccordionTrigger>
            <AccordionContent>
              <ActivityContent semester={semester} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </AdminLayout>
  )
}
