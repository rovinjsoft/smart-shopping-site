import DarkDocumentLayout from '#/components/themes/DarkDocumentLayout';
import LightDocumentLayout from '#/components/themes/LightDocumentLayout';
import { getThemeString } from '#/util/qs/getThemeString';
import { useSearchParams } from 'next/navigation';

export function ThemeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const theme = getThemeString(searchParams.get('theme'));

  return theme === 'dark' ? (
    <DarkDocumentLayout>{children}</DarkDocumentLayout>
  ) : (
    <LightDocumentLayout>{children}</LightDocumentLayout>
  );
}
