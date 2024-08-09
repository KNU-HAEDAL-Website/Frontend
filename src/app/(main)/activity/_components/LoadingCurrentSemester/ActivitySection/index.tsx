'use client'

import { useEffect } from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useGetActivities } from '@/service/data/activity'

import { useActivityStore } from '~activity/_store/activity'

import { ActivityList } from './ActivityList'
import { BoardSection } from './BoardSection'

type ActivitySectionProps = {
  semesterId: number
}

export const ActivitySection = ({ semesterId }: ActivitySectionProps) => {
  const { data: activities, status } = useGetActivities(semesterId)
  const { currentActivity, setCurrentActivity } = useActivityStore()

  useEffect(() => {
    if (status === 'success' && activities?.length > 0) {
      if (currentActivity?.activityName === 'init') {
        setCurrentActivity(activities[0])
      }
    }
  }, [status, activities, setCurrentActivity])

  if (status === 'pending') return <div>loading...</div>
  if (!activities?.length) return <div>활동이 없습니다.</div>

  return (
    <div className="flex w-screen flex-col px-12 sm:px-20 md:max-w-screen-lg">
      <ActivityList activities={activities} />
      <BoardSection />
      <Link href="/activity/create-board" className="flex justify-end">
        <Button className="max-w-fit">게시판 생성하기</Button>
      </Link>
    </div>
  )
}
