'use client';

import HomeContentEn from '#/app/_locales/home/HomeContentEn';
import HomeContentKo from '#/app/_locales/home/HomeContentKo';
import { getLocaleString } from '#/util/qs/getLocaleString';
import { useSearchParams } from 'next/navigation';
import { Fragment, Suspense } from 'react';

function HomeMessage() {
  const searchParams = useSearchParams();
  const locale = getLocaleString(searchParams.get('locale'));

  return <Fragment>{locale === 'ko' ? <HomeContentKo /> : <HomeContentEn />}</Fragment>;
}

export default function Home() {
  return (
    <Suspense>
      <HomeMessage />
    </Suspense>
  );
}
