import type { Metadata } from "next";
// import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import Local from "next/font/local";
import "./globals.css";

const inter = Local({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
});

const spaceGrotesk = Local({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
