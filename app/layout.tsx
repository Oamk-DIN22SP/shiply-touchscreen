import { Urbanist } from "next/font/google";

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
          {children}
        </div>
      </body>
    </html>
  );
}
