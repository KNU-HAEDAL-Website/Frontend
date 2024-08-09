import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Activity } from '@/types/activity'

interface ActivityProps {
  currentActivity?: Activity
  setCurrentActivity: (value: Activity) => void
}

export const useActivityStore = create(
  persist<ActivityProps>(
    (set) => ({
      currentActivity: {
        activityId: -1,
        activityName: 'init',
        semesterId: -1,
      },
      setCurrentActivity: (value) => set(() => ({ currentActivity: value })),
    }),
    {
      name: 'current-activity',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
