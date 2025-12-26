import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/layout/Footer";

export const embed = Questrial({
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "NutriBem"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${embed.className} dark:bg-neutral-950 bg-gray-50`}>
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children} 
          </ThemeProvider>
          
          <Footer/>
      </body>
    
    </html>
  );
}
