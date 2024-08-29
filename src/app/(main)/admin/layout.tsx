const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-1">
      <div className="flex-1 bg-slate-200">
        <div className="w-56">test</div>
      </div>
      <main className="w-full">{children}</main>
    </div>
  )
}

export default AdminLayout
