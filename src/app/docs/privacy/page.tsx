'use client';

import PrivacyPolicyDocsEn from '#/app/docs/privacy/_locales/privacy_en';
import PrivacyPolicyDocsKo from '#/app/docs/privacy/_locales/privacy_ko';
import DarkDocumentLayout from '#/components/DarkDocumentLayout';
import LightDocumentLayout from '#/components/LightDocumentLayout';
import { getLocaleString } from '#/util/qs/getLocaleString';
import { getThemeString } from '#/util/qs/getThemeString';
import { useSearchParams } from 'next/navigation';
import { Fragment, Suspense } from 'react';

function ThemeLayout({
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

function PrivacyPolicyMessage() {
  const searchParams = useSearchParams();
  const locale = getLocaleString(searchParams.get('locale'));

  return <Fragment>{locale === 'ko' ? <PrivacyPolicyDocsKo /> : <PrivacyPolicyDocsEn />}</Fragment>;
}

function PrivacyPolicyContent() {
  return (
    <ThemeLayout>
      <PrivacyPolicyMessage />
    </ThemeLayout>
  );
}

export default function PrivacyPolicy() {
  return (
    <Suspense>
      <PrivacyPolicyContent />
    </Suspense>
  );
}
