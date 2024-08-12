'use client'

import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useGetSemesters } from '@/service/data/semester'

const RedirectSemester = () => {
  const router = useRouter()
  const { semesters } = useGetSemesters()

  useEffect(() => {
    if (semesters && semesters.length > 0) {
      const lastSemester = semesters[semesters.length - 1].semesterName

      router.push(`/activity/${lastSemester}`)
    }
  }, [semesters, router])

  return <div className="w-full">loading...</div>
}

export default RedirectSemester
