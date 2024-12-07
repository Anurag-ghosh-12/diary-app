import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export const metadata = {
  title: "Reflect",
  description: "Journal",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0">
        {/* background img */}
        </div>
        {/* header */}
        <Header />
        <main className="min-h-screen">{children}</main>
       
        <footer className="bg-orange-300 py-12 bg-opacity-10">
          <div className="mx-auto px-4 text-center text-gray-900">
            <p>Made with ❤️ by Anurag Ghosh.</p>
          </div>
        </footer>

      </body>
    </html>
    </ClerkProvider>
  );
}
