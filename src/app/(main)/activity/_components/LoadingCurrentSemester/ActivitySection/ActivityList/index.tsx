import { useActivityStore } from '@/app/(main)/activity/_store/activity'

import { ActiveButton } from '@/components/ActiveButton'
import { Activity } from '@/types/activity'

interface ActivityListProps {
  activities: Activity[]
}

export const ActivityList = ({ activities }: ActivityListProps) => {
  const { currentActivity, setCurrentActivity } = useActivityStore()

  return (
    <div className="flex justify-center gap-2">
      {activities.map((activity) => (
        <ActiveButton
          key={activity.activityId}
          isActive={currentActivity?.activityId === activity.activityId}
          onClick={() => setCurrentActivity(activity)}
          className="h-3 rounded-full p-4"
        >
          {activity.activityName}
        </ActiveButton>
      ))}
    </div>
  )
}
