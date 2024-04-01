import "@/styles/globals.scss";
import { UniformContext } from "@uniformdev/canvas-next-rsc";
import { NextCookieTransitionDataStore } from "@uniformdev/context-next";

// const context = new Context({
//   manifest,
//   transitionStore: new NextCookieTransitionDataStore({}),
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UniformContext>
          {children}
        </UniformContext>
      </body>
    </html>
  );
}
