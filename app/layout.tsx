import Navigation from "@/components/Navigation";
import { Public_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

const publicSans = Public_Sans({ weight: ["300", "400", "500", "600", "700", "900"], subsets: ["latin"] });

export const metadata = {
  title: "Template ABC",
  description: "Template ABC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
