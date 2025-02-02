import { css } from '#/styled-system/css';

const lightTheme = css({
  padding: '3em 2em',
  height: '100vh',
  width: '100vw',
  color: '#555555',
  background: '#FEFEFE',
  fontFamily: `var(--font-geist-sans, --font-geist-mono)`,
});

export default function LightDocumentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={lightTheme}>{children}</div>;
}
