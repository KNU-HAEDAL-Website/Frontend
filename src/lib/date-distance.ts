import { getDateDistance, getDateDistanceText } from '@toss/date'

export const formatDateDistanceFromToday = (date: Date) => {
  const today = new Date()
  const distance = getDateDistance(date, today)

  if (distance.days > 3) {
    return undefined
  }

  if (distance.days < 1) {
    if (distance.hours < 1) {
      const distanceText = getDateDistanceText(distance, {
        days: () => false,
        hours: () => false,
        seconds: () => false,
      })

      return distance.minutes < 1 ? '방금 전' : `${distanceText} 전`
    }

    const distanceText = getDateDistanceText(distance, {
      days: () => false,
      minutes: () => false,
      seconds: () => false,
    })

    return `${distanceText} 전`
  }

  const distanceText = getDateDistanceText(distance, {
    hours: () => false,
    minutes: () => false,
    seconds: () => false,
  })

  return `${distanceText} 전`
}
