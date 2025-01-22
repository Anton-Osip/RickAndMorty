import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Rick and Morty",
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang = "en">
        <body>
        <main>{children}</main>
        </body>
        </html>
    )
}
