import { HTMLAttributes } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const seperatorVariants = cva('border-none', {
  variants: {
    variant: {
      light: 'bg-input',
      dark: 'bg-primary/40',
    },
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
  },
  defaultVariants: {
    variant: 'light',
    orientation: 'horizontal',
  },
})

interface SeperatorProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof seperatorVariants> {}

export const Seperator = ({
  variant,
  orientation,
  className,
  ...props
}: SeperatorProps) => {
  return (
    <hr
      className={cn(seperatorVariants({ variant, orientation, className }))}
      {...props}
    />
  )
}
