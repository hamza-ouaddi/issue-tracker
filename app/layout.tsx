import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import AuthProvider from "./auth/AuthProvider";
import { Providers } from "./providers";
import { Theme } from "@radix-ui/themes";
import ReactQueryClientProvider from "./ReactQueryClientProvider";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plusJakartaSans",
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description:
    "Issue Tracker is a streamlined web app that simplifies issue management, offering a dashboard for quick stats and a user-friendly interface to add, track, and analyze issues efficiently.",
  icons: {
    icon: "/assets/images/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable}`}>
        <ReactQueryClientProvider>
          <AuthProvider>
            <Providers>
              <Theme>
                <Toaster position="top-center" />
                {children}
              </Theme>
            </Providers>
          </AuthProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
