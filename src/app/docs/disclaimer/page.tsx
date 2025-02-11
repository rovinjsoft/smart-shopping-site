'use client';

import {
  disclaimerContentEn,
  disclaimerContentKo,
  disclaimerHeadingEn,
  disclaimerHeadingKo,
} from '#/app/_contents/disclaimer';
import DarkDocumentLayout from '#/components/DarkDocumentLayout';
import LightDocumentLayout from '#/components/LightDocumentLayout';
import { css } from '#/styled-system/css';
import { getLocaleString } from '#/util/qs/getLocaleString';
import { getThemeString } from '#/util/qs/getThemeString';
import { nanoid } from 'nanoid';
import { useSearchParams } from 'next/navigation';
import { Fragment, Suspense } from 'react';

const styleH1 = css({
  textAlign: 'center',
  fontSize: '3xl',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const styleP = css({
  marginBottom: '1rem',
});

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

function DisclaimerMessage() {
  const searchParams = useSearchParams();
  const locale = getLocaleString(searchParams.get('locale'));
  const title = locale === 'en' ? disclaimerHeadingEn : disclaimerHeadingKo;
  const content = locale === 'en' ? disclaimerContentEn : disclaimerContentKo;

  return (
    <Fragment>
      <section>
        <h1 className={styleH1}>{title}</h1>
      </section>
      <section>
        {content.map((content) => {
          return (
            <p key={nanoid()} className={styleP}>
              {content}
            </p>
          );
        })}
      </section>
    </Fragment>
  );
}

function DisclaimerPolicyContent() {
  return (
    <ThemeLayout>
      <DisclaimerMessage />
    </ThemeLayout>
  );
}

export default function DisclaimerPolicy() {
  return (
    <Suspense>
      <DisclaimerPolicyContent />
    </Suspense>
  );
}
