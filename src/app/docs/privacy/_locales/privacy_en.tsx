import { css } from '#/styled-system/css';
import clsx from 'clsx';

const styleH1 = css({
  textAlign: 'center',
  fontSize: '3xl',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const styleH2 = css({
  textAlign: 'left',
  fontSize: '1xl',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const styleP = css({
  marginBottom: '1rem',
});
const styleUl = css({
  marginLeft: '2rem',
  listStyleType: 'disc',
});
const styleMarginTop = css({
  marginTop: '1rem',
});

export default function PrivacyPolicyDocsEn() {
  return (
    <section>
      <h1 className={styleH1}>Privacy Policy</h1>
      <h2 className={styleH2}>Last Updated: 2024/02/20</h2>
      <p className={styleP}>
        Rovinj Soft (“Company”) values the privacy of users of the Smart Shopping app (“App”). This
        Privacy Policy explains how we handle personal data. By using the App, you agree to this
        policy.
      </p>
      <h2 className={styleH2}>1. Information We Do Not Collect</h2>
      <p className={styleP}>
        The Company does not directly collect or store any personal data from users. However, in-app
        purchases are processed through Google Play or Apple App Store, and these platforms may
        handle payment-related information.
      </p>
      <ul className={clsx(styleP, styleUl)}>
        <li>
          Information Not Collected by Us:
          <ul className={styleUl}>
            <li>Name, phone number, email address, or other personally identifiable information</li>
            <li>
              Credit card or payment details (all payments are managed by Google Play and Apple App
              Store)
            </li>
          </ul>
        </li>
      </ul>
      <h2 className={styleH2}>2. Purpose of Data Processing</h2>
      <p className={styleP}>
        The Company does not store or manage user personal data. All{' '}
        <strong>in-app purchases are handled by Google Play and Apple App Store</strong>, and users
        should refer to their respective privacy policies for more details.
      </p>
      <h2 className={styleH2}>3. Third-Party Data Sharing</h2>
      <p>The Company does not share user data with third parties, except in the following cases:</p>
      <ul className={clsx(styleP, styleUl, styleMarginTop)}>
        <li>If required by law or requested by authorities through legal procedures</li>
        <li>
          If data is processed by Google or Apple under their terms and conditions related to
          payment services
        </li>
      </ul>
      <h2 className={styleH2}>4. Data Security & Protection</h2>
      <p className={styleP}>
        Since the Company does not collect or store personal data, all payment and user information
        is secured under Google Play and Apple App Store security policies.
      </p>
      <h2 className={styleH2}>5. Data Retention & Deletion</h2>
      <p className={styleP}>
        The Company does not retain or process personal data, so no data retention or deletion
        policies apply.
      </p>
      <h2 className={styleH2}>6. User Rights & Choices</h2>
      <p className={styleP}>
        Users can manage their subscriptions and purchase history through Google Play or Apple App
        Store settings.
      </p>
      <h2 className={styleH2}>7. Changes to the Privacy Policy</h2>
      <p className={styleP}>
        This Privacy Policy may be updated as needed. Any significant changes will be communicated
        through an in-app notification or an update.
      </p>
      <h2 className={styleH2}>Contact Information</h2>
      <p className={styleP}>
        For any questions regarding this Privacy Policy, please contact us at:
      </p>
      <ul className={clsx(styleP, styleUl, styleMarginTop)}>
        <li>Company Name: Rovinj Soft</li>
        <li>Email: rovinjsoft@gmail.com</li>
      </ul>
    </section>
  );
}
