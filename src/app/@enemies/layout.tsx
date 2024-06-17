export default async function Layout({
  children
}: {
  children: React.ReactNode;
})  {
  return (
    <div className="hidden border-l bg-sky-300/10 lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <span className="font-semibold">Enemies</span>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {children}
          </nav>
        </div>
      </div>
    </div>
  );
}
