import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import "./globals.css";
import { Provider } from "./Provider";
import { Header } from "@/components/header";
import { Notifications } from "@/components/notifications";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Livedocs",
  description: "A documentation site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#3371FF", fontSize: "16px" },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="grid grid-rows-[auto-1fr-auto] min-h-[100dvh]">
            <Provider>{children}</Provider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
