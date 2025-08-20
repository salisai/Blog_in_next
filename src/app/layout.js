import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My blog",
  description: "personal blog for sharing my little experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
