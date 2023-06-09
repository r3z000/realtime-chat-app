import Providers from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: "808Chat | Home",
  description: "Welcome to the 808Chat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
