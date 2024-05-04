// import { Inter } from "next/font/google";
import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PPJLC Dorm",
  description: "This app is to store student's in-out info...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://i.pinimg.com/736x/04/08/d6/0408d676048e0f7e271a335d8e3c6a4b.jpg" />
    <meta name="google-site-verification" content="qJf15M0Lc3VzTqD2gFTrxghs2A0PGrf0UmXBgqsSQ08" />
      {/* <body className={inter.className}>{children}</body> */}
      <body className="absolute bg-slate-700 w-full m-auto ">
        {children}
      </body>
    </html>
  );
}
