import { css } from '#/styled-system/css';

const darkTheme = css({
  padding: '3em 2em',
  height: '100vh',
  width: '100vw',
  color: '#D4D4D4',
  background: '#1A1A1A',
  fontFamily: `var(--font-geist-sans, --font-geist-mono)`,
});

export default function DarkDocumentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={darkTheme}>{children}</div>;
}
