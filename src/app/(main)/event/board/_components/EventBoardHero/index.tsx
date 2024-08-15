import { Seperator } from '@/components/ui/seperator'

export const EventBoardHero = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <Seperator variant="dark" />
      <div className="pl-1 text-2xl font-semibold">행사 게시판</div>
      <div className="flex flex-col gap-1 pl-1 text-sm">
        <div>🗓️ 개강총회/종강총회/성과공유회</div>
        <div>🎉 해크닉/MT/슬기로운 해달생활</div>
        <div>💡 아이디어톤/해커톤</div>
        <div>🎓 진로특강/취업특강</div>
      </div>
      <Seperator variant="dark" />
    </div>
  )
}
