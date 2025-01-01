// app/layout.js
import { Plus_Jakarta_Sans, Alata } from "next/font/google";
import "@/core/styles/globals.css";
import "@/core/styles/tailwind.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alata",
});

export const metadata = {
  title: "AmanMemilih",
  description: "Your site description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${alata.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/assets/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
