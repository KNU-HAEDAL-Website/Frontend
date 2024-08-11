'use client'

import { useEffect } from 'react'

import usePersistedStore from '@/hook/usePersistedStore'
import { useGetSemesters } from '@/service/data/semester'

import {
  INIT_SEMESTER_STORE,
  semesterSelector,
  useSemesterStore,
} from '~activity/_store/semester'

import { SemesterList } from './SemesterList'

export const SemesterSection = () => {
  const { semesters } = useGetSemesters()

  const [currentSemester, setCurrentSemester] = usePersistedStore(
    useSemesterStore,
    INIT_SEMESTER_STORE,
    semesterSelector,
  )

  useEffect(() => {
    if (currentSemester?.semesterName === 'init') {
      setCurrentSemester(semesters[semesters.length - 1])
    }
  }, [currentSemester, setCurrentSemester])

  return <SemesterList semesters={semesters} />
}
