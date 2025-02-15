'use client';

import PrivacyPolicyDocsEn from '#/app/_locales/privacy/PrivacyPolicyDocsEn';
import PrivacyPolicyDocsKo from '#/app/_locales/privacy/PrivacyPolicyDocsKo';
import { ThemeLayout } from '#/components/themes/ThemeLayout';
import { getLocaleString } from '#/util/qs/getLocaleString';
import { useSearchParams } from 'next/navigation';
import { Fragment, Suspense } from 'react';

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
