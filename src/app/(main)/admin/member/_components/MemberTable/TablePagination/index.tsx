'use client'

import { Table } from '@tanstack/react-table'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'

interface TablePaginationProps<T> {
  pageNumList: number[]
  table: Table<T>
}

export function MemberTablePagination<T>({
  pageNumList,
  table,
}: TablePaginationProps<T>) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href=""
            onClick={() => table.previousPage()}
            aria-disabled={!table.getCanPreviousPage()}
            className={cn(
              !table.getCanPreviousPage()
                ? 'pointer-events-none opacity-50'
                : '',
            )}
          />
        </PaginationItem>
        {pageNumList.map((pageNum) => {
          const isActive = pageNum === table.getState().pagination.pageIndex + 1

          return (
            <PaginationItem key={pageNum}>
              <PaginationLink
                href=""
                onClick={() => table.setPageIndex(pageNum - 1)}
                isActive={isActive}
              >
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PaginationNext
            href=""
            onClick={() => table.nextPage()}
            aria-disabled={!table.getCanNextPage()}
            className={cn(
              !table.getCanNextPage() ? 'pointer-events-none opacity-50' : '',
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
