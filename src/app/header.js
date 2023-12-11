
export default function Header() {
    return (
        <header className="bg-stone-300 text-stone-700 h-16 flex overflow-hidden">
            <nav className="flex flex-row items-center ml-4 sm:ml-36">
                {/* nav will have About, Portfolio, Contact. will be fixed to top of page */}
                <a className="w-24 text-center" href="#aboutSection">About</a>
                <a className="w-24 text-center" href="#portfolioSection">Projects</a>
                <a className="w-24 text-center" href="#contactSection">Contact</a>
            </nav>
        </header>
    )
}