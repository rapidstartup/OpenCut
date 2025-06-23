import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OpenCut",
  description:
    "A simple but powerful video editor that gets the job done. In your browser.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" forcedTheme="dark" enableSystem>
          <TooltipProvider>
            {children}
            <Analytics />
            <Toaster />
            <Script
              src="https://app.databuddy.cc/databuddy.js"
              strategy="afterInteractive"
              async
              data-client-id="UP-Wcoy5arxFeK7oyjMMZ"
              data-track-attributes={true}
              data-track-errors={true}
              data-track-outgoing-links={true}
              data-track-web-vitals={true}
            />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
