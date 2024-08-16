import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Paging } from '@/service/types/paging'

type PaginationButtonsProps<T extends Paging> = {
  data: T
}

export const PaginationButtons = <T extends Paging>({
  data,
}: PaginationButtonsProps<T>) => {
  const pages = createPageNumber(data.pageInfo.totalPages)

  const searchParams = useSearchParams()
  const pathName = usePathname()

  const currentPage = Number(searchParams.get('page')) || 1

  const getPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())

    return `${pathName}?${params.toString()}`
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getPageURL(currentPage - 1)}
            disabled={currentPage === 1}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <Link href={getPageURL(page)}>
              <PaginationButton isActive={currentPage === page}>
                {page}
              </PaginationButton>
            </Link>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={getPageURL(currentPage + 1)}
            disabled={currentPage === data.pageInfo.totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

const createPageNumber = (totalPages: number) => {
  return Array.from({ length: totalPages }, (_, index) => index + 1)
}
