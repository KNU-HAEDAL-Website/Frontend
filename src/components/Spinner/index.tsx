export const Spinner = () => {
  return (
    <div
      className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-primary"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
