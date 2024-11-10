import Link from "next/link";

export default function NavBar() {
    return (
        <>
        <nav className="bg-gray-800">
            <ul className="text-2xl hover:underline">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/menu">Menu</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
     </>
    );
}