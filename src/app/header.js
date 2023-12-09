
export default function Header() {
    return (
        <header className="bg-stone-300 text-stone-700">
            <navbar className="flex flex-row">
                {/* nav will have About, Portfolio, Contact. will be fixed to top of page */}
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a>
            </navbar>
        </header>
    )
}