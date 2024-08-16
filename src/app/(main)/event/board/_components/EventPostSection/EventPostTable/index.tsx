'use client'

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { TableContent } from '@/components/Table/TableContent'
import { Post } from '@/types/post'

type EventPostTableProps = {
  posts: Post[]
  pageNumber: number
  pageSize: number
}

export const EventPostTable = ({
  posts,
  pageNumber,
  pageSize,
}: EventPostTableProps) => {
  if (!posts?.length)
    return <div className="flex w-full justify-center">게시글이 없습니다.</div>

  const columns: ColumnDef<Post>[] = [
    {
      header: '번호',
      id: 'id',
      cell: ({ row, table }) => (
        <div className="text-center">
          {pageNumber * pageSize +
            table?.getSortedRowModel()?.flatRows?.indexOf(row) +
            1}
        </div>
      ),
    },
    {
      accessorKey: 'postTitle',
      header: '제목',
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('postTitle')}</div>
      ),
    },
    {
      accessorKey: 'userName',
      header: '작성자',
      cell: ({ row }) => (
        <div className="text-center">{row.getValue('userName')}</div>
      ),
    },
    {
      accessorKey: 'postCreateDate',
      header: '작성일',
      cell: ({ row }) => {
        return (
          <div className="text-center">{row.getValue('postCreateDate')}</div>
        )
      },
    },
    {
      accessorKey: 'postViews',
      header: '조회수',
      cell: ({ row }) => {
        return <div className="text-center">{row.getValue('postViews')}</div>
      },
    },
  ]

  const table = useReactTable({
    data: posts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return <TableContent table={table} />
}
