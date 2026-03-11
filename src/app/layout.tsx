import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Project Arcadia",
  description: "Your Otaku Sanctuary",
};

import "@/styles/_main.scss";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
