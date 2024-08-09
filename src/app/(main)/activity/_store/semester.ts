import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Semester } from '@/types/activity'

interface SemesterProps {
  currentSemester?: Semester
  setCurrentSemester: (value: Semester) => void
}

export const useSemesterStore = create(
  persist<SemesterProps>(
    (set) => ({
      currentSemester: {
        semesterId: -1,
        semesterName: 'init',
      },
      setCurrentSemester: (value) => set(() => ({ currentSemester: value })),
    }),
    {
      name: 'current-semester',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
