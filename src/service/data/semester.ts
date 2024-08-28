import { queryOptions, useQuery } from '@tanstack/react-query'

import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { getSemesters } from '@/service/server/semester'
import { Semester } from '@/types/activity'

export const semesterQuery = () =>
  queryOptions({
    queryKey: ['semesters'],
    queryFn: async () => getSemesters(),
  })

export const useGetSemesters = () => {
  const { data, status } = useQuery(semesterQuery())

  const semesters = data ? convertSemesterFormat(data) : []

  return { semesters, status }
}

const convertSemesterFormat = (semesters: Semester[]): Semester[] => {
  return semesters.map((semester, index) => {
    const year = semester.semesterName.slice(0, 4)
    const term = semester.semesterName.slice(4)

    return {
      index,
      semesterId: semester.semesterId,
      semesterName: `${year}-${term}`,
    }
  })
}

export const useCurrentSemester = (semesterName: string) => {
  const { queryKey } = semesterQuery()
  const semesters = queryClient.getQueryData(queryKey)

  const currentSemester = convertSemesterFormat(semesters || []).find(
    (semester) => semester.semesterName === semesterName,
  )

  if (!currentSemester) {
    throw new Error(DATA_ERROR_MESSAGES.SEMESTER_NOT_FOUND)
  }

  return currentSemester
}
