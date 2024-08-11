import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Semester } from '@/types/activity'

export interface SemesterStore {
  currentSemester?: Semester
  setCurrentSemester: (value: Semester) => void
}

export const INIT_SEMESTER_STORE: SemesterStore = {
  currentSemester: {
    semesterId: -1,
    semesterName: 'init',
  },
  setCurrentSemester: (currentSemester: Semester) => ({}),
}

export const semesterSelector = (
  store: SemesterStore,
): [Semester | undefined, (arg: Semester) => void] => [
  store.currentSemester,
  store.setCurrentSemester,
]

export const useSemesterStore = create(
  persist<SemesterStore>(
    (set) => ({
      ...INIT_SEMESTER_STORE,
      setCurrentSemester: (currentSemester) => set(() => ({ currentSemester })),
    }),
    {
      name: 'current-semester',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
