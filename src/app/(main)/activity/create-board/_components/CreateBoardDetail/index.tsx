'use client'

import { NameLabel } from '@/components/NameLabel'
import { Label } from '@/components/ui/label'

export const CreateBoardDetail = () => {
  const detailData = [
    { index: 0, label: '학기', name: '테스트' },
    { index: 1, label: '활동명', name: '테스트' },
    { index: 2, label: '생성자', name: '테스트' },
  ]

  return (
    <div className="flex justify-evenly py-6">
      {detailData.map((detail) => (
        <div key={detail.index} className="flex items-center gap-2">
          <Label className="text-md">{detail.label}</Label>
          <NameLabel name={detail.name} />
        </div>
      ))}
    </div>
  )
}
