import { Urbanist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ToastProvider from "@/providers/toast-provider";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Shiply Touchscreen",
  description: "Shiply Touchscreen App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <div className="p-8 min-h-full flex justify-center items-center">
          <div className="max-w-[780px] w-full h-fit bg-gray-300 pb-4 pt-2 px-6 border-[5px] border-[#4A4A4A] rounded-[10px]">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={280}
                height={74}
                className="mx-auto"
              />
            </Link>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
