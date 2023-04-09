import { FC, ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Ogame of lucas manoguerra",
  description:
    'Clone ogame con algunas modificaciones a gutos particulares echa por lucas manoguerra ""Email: kiu.manoguerra@gmail.com""',
};

type TRootLayout = {
  children: ReactNode;
};

const RootLayout: FC<TRootLayout> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
