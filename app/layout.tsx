import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexuitive",
  description: "Premium Digital Experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        {children}
      </body>
    </html>
  );
}