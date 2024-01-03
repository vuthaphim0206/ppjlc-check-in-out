// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dorm In-Out Info",
  description: "This app is to store student's in-out info...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="img/PPJLC.png" />
      {/* <body className={inter.className}>{children}</body> */}
      <body className="absolute bg-pink-700 w-full m-auto ">
        {children}
      </body>
    </html>
  );
}
