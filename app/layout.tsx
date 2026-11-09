import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import GlobalStyle from "@/app/components/GlobalStyles";


export const metadata: Metadata = {
  title: "CS303 URL Shortener",
  description: "A link shortener / url alias creator developed for a CS303 assignment",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Header />
        <Nav />

        {/*children = content of whatever page the user is visiting*/}
        {children}
      </body>
    </html>
  );
}
