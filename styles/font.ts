import { Poppins, Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const poppins = Poppins({
  weight: ["400", "700", "100"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export { playfair_display, poppins };
