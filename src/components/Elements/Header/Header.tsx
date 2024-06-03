export default function Header() {
  return (
    <header className="bg-gray-900">
      <nav className="flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
          <img className="h-8 w-auto inline-block mr-2" src="../../../../icon.png" alt="" /> 
          <h3 className="text-white inline-block py-2">Weather Dashboard</h3>
            <span className="sr-only">Weather Dashboard</span>
          </a>
        </div>
      </nav>
      
    </header>
  )
}
