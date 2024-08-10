import { Dispatch, SetStateAction } from 'react'

import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { BoardsResponse } from '@/service/server/board'

type BoardPaginationButtonProps = {
  boardData?: BoardsResponse
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export const BoardPaginationButton = ({
  boardData,
  currentPage,
  setCurrentPage,
}: BoardPaginationButtonProps) => {
  if (!boardData) return null

  const pages = createPageNumber(boardData.pageInfo.totalPages)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCurrentPage((old) => Math.max(old - 1, 0))
            }}
            disabled={currentPage === 0}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationButton
              onClick={() => setCurrentPage(page - 1)}
              isActive={currentPage + 1 === page}
            >
              {page}
            </PaginationButton>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCurrentPage((old) => (boardData.nextPageToken ? old + 1 : old))
            }}
            disabled={currentPage === boardData.pageInfo.totalPages - 1}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

const createPageNumber = (totalPages: number) => {
  return Array.from({ length: totalPages }, (_, index) => index + 1)
}
