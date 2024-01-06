import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${plusJakartaSans.className} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
