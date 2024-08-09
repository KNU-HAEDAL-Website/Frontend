'use client'

import { useSemesterStore } from '~activity/_store/semester'

import { ActivitySection } from './ActivitySection'

export const LoadingCurrentSemester = () => {
  const currentSemester = useSemesterStore((state) => state.currentSemester)

  if (!currentSemester) return <div>loading...</div>

  return <ActivitySection semesterId={currentSemester.semesterId} />
}
