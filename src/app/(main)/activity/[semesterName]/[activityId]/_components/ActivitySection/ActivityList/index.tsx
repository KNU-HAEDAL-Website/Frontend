import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ActiveButton } from '@/components/ActiveButton'
import { Activity } from '@/types/activity'

interface ActivityListProps {
  activities: Activity[]
  currentActivity: Activity
}

export const ActivityList = ({
  activities,
  currentActivity,
}: ActivityListProps) => {
  const pathName = usePathname()
  const basePath = pathName.split('/').slice(0, -1).join('/')

  return (
    <div className="flex justify-center gap-2">
      {activities.map((activity) => (
        <Link
          key={activity.activityId}
          href={`${basePath}/${activity.activityId}`}
        >
          <ActiveButton
            isActive={currentActivity?.activityId === activity.activityId}
            className="h-3 rounded-full p-4"
          >
            {activity.activityName}
          </ActiveButton>
        </Link>
      ))}
    </div>
  )
}
