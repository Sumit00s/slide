import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {ClerkProvider} from '@clerk/nextjs'
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import "@/app/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engage",
  description: "Engage is the ultimate Instagram automation tool that helps influencers, creators, and businesses boost engagement, auto-reply to DMs, and turn followers into customers — effortlessly and intelligently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster/>
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}

