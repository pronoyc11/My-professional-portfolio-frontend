import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: {
    default: `${siteData.name} | ${siteData.designation}`,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: siteData.favicon,
    shortcut: siteData.favicon,
    apple: siteData.favicon,
  },
  openGraph: {
    title: `${siteData.name} | ${siteData.designation}`,
    description: siteData.description,
    url: siteData.url,
    siteName: siteData.name,
    images: [
      {
        url: siteData.profileImage,
        width: 1200,
        height: 630,
        alt: siteData.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} | ${siteData.designation}`,
    description: siteData.description,
    images: [siteData.profileImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
