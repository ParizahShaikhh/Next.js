import NavBar from "./NavBar"

import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
        <NavBar />
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-[350px]">
            <p>&copy; {new Date().getFullYear()} Parizah Shaikh Flavorscape. All Rights Reserved.</p>
        </footer>
        </>
    )
}