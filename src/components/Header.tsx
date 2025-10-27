import Link from "next/link"

export default function Header() {
    return(
        <header className="bg-white px-5 lg:px-[60px] py-[22px]">
            <nav className="flex justify-between items-center lg:text-[20px] font-semibold">
                <Link href="/">
                    <span>SmackVanContract</span>
                </Link>
                <div className="flex items-center gap-5 lg:gap-[30px]">
                    
                    <Link href="/login">Login</Link>
                    <span>Username</span>
                    <Link href="/contracts">contracts</Link>
                </div>

            </nav>
        </header>
    )
}