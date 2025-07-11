// app/layout.tsx
import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import { inter, poppins, manrope } from "@/lib/fonts";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `${siteConfig.name} - Plombier à Rennes`,
  description: siteConfig.description,
  keywords: ["plombier rennes", "plomberie", "dépannage", "urgence plomberie", "fuite d'eau"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans">
        <NavBar />
        <main className="flex flex-col flex-1">{children}</main>
      </body>
    </html>
  );
}
