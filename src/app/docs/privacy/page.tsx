'use client';

import { disclaimerContentKo } from '#/app/contents/disclaimer';
import DocumentLayout from '#/components/DarkDocumentLayout';
import { css } from '#/styled-system/css';
import { nanoid } from 'nanoid';
import { Suspense } from 'react';

const styleH1 = css({
  textAlign: 'center',
  fontSize: '3xl',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const styleP = css({
  marginBottom: '1rem',
});

// export const metadata: Metadata = {
//   title: 'SmartShopping',
//   description: 'Smart',
// };

export default function PrivacyPolicy() {
  return (
    <DocumentLayout>
      <Suspense>
        <section>
          <h1 className={styleH1}>Disclaimer</h1>
        </section>
        <section>
          {disclaimerContentKo.map((content) => {
            return (
              <p key={nanoid()} className={styleP}>
                {content}
              </p>
            );
          })}
        </section>
      </Suspense>
    </DocumentLayout>
  );
}
