import '#/components/font';
import { css } from '#/styled-system/css';
import './globals.css';

const lightTheme = css({
  minHeight: '100vh',
  width: '100vw',
  color: '#FEFEFE',
  background: '#FFA726',
  fontFamily: `var(--font-geist-sans, --font-geist-mono)`,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={lightTheme}>{children}</div>
      </body>
    </html>
  );
}
