import { Urbanist } from "next/font/google";
import Image from "next/image";

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
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-[65vw] h-fit bg-gray-300 py-4 px-6 border-[5px] border-[#4A4A4A] rounded-[10px]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={280}
              height={74}
              className="mx-auto pb-6"
            />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
