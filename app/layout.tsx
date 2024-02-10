import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Satyajeet | Personal Portfolio",
  description: "Satyajeet is a frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[50]`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <div></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
