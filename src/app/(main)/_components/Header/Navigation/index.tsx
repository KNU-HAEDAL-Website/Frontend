import { NavigationItem } from './NavigationItem'

export const Navigation = () => {
  return (
    <ul className="flex flex-row gap-10">
      {navigationLinks.map((route) => (
        <li key={route.href}>
          <NavigationItem name={route.name} href={route.href} />
        </li>
      ))}
    </ul>
  )
}

export const navigationLinks = [
  {
    name: 'Activity',
    href: '/activity',
  },
  {
    name: 'Event',
    href: '/event',
  },
  {
    name: 'Notice',
    href: '/notice',
  },
  {
    name: 'Recruit',
    href: '/recruit',
  },
] as const
