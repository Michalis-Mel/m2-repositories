import "./styles/globals.scss";
import { Raleway } from "next/font/google";

//Import components
import Header from "./components/Header";

const raleway = Raleway({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Michael Meliopoulos Repositories",
  description:
    "This is an application where you can see the repositories of Michael Meliopoulos",
  keywords: ["Michael", "Meliopoulos", "Repositories", "Github", "Git"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <main> {children}</main>
      </body>
    </html>
  );
}
