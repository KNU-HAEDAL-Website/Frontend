import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { PageInfo } from '@/service/types/paging'

type BoardPaginationButtonProps = {
  pageInfo?: PageInfo
}

export const BoardPaginationButton = ({
  pageInfo,
}: BoardPaginationButtonProps) => {
  if (!pageInfo) return null

  const pages = createPageNumber(pageInfo.totalPages)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationButton
              href="#"
              isActive={pageInfo.pageNumber + 1 === page}
            >
              {page}
            </PaginationButton>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

const createPageNumber = (totalPages: number) => {
  return Array.from({ length: totalPages }, (_, index) => index + 1)
}
