import "./globals.css";
import Preline from "./Preline";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <Preline/>
    </html>
  );
}
