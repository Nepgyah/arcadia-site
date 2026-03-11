import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Project Arcadia",
  description: "Your Otaku Sanctuary",
};

import "@/styles/_main.scss";
import { Provider } from "@/components/ui/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
