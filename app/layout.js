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
      {/* <body className={inter.className}>{children}</body> */}
      <body className="absolute bg-red-200 w-full ml-auto mr-auto m-0 mt-0">
        {children}
      </body>
    </html>
  );
}
