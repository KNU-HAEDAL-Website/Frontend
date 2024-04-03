'use client'

import { ColumnDef } from '@tanstack/react-table'

import { ManageUserGrageDB } from '@/lib/data'

import { MemberTable } from '../member-table'
import { BanForm } from './ban-form'

const columns: ColumnDef<ManageUserGrade>[] = [
  {
    header: '',
    id: 'id',
    cell: ({ row, table }) => (
      <div className="text-center">
        {table?.getSortedRowModel()?.flatRows?.indexOf(row) + 1}
      </div>
    ),
  },
  {
    accessorKey: 'name',
    header: '이름',
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'studentId',
    header: '학번',
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('studentId')}</div>
    ),
  },
  {
    accessorKey: 'grade',
    header: '등급',
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('grade')}</div>
    ),
  },
  {
    accessorKey: 'isBanned',
    header: '',
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <BanForm member={row.original} />
        </div>
      )
    },
  },
]

export const BanTable = () => {
  // DB 연결 전 더미 데이터 사용
  const data: ManageUserGrade[] = ManageUserGrageDB

  return <MemberTable data={data} columns={columns} />
}