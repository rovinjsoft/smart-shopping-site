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

export default function PrivacyPolicyDocsKo() {
  return (
    <section>
      <h1 className={styleH1}>개인정보 처리방침</h1>
      <h2 className={styleH2}>최종 업데이트: 2024년 2월 20일</h2>
      <p className={styleP}>
        Rovinj Soft(이하 “회사”)는 Smart Shopping 앱(이하 “앱”)을 사용하는 사용자들의 개인정보
        보호를 중요하게 생각합니다. 본 개인정보 처리방침은 회사가 개인정보를 어떻게 처리하는지에
        대한 내용을 설명하며, 사용자는 본 앱을 이용함으로써 본 방침에 동의하게 됩니다.
      </p>
      <h2 className={styleH2}>1. 수집하는 개인정보</h2>
      <p className={styleP}>
        회사는 사용자의 개인정보를 직접 수집하지 않습니다. 다만, 앱 내에서 Google Play 또는 Apple
        App Store의 인앱 결제 시스템을 통해 결제가 이루어질 경우, 해당 플랫폼에서 결제 관련 정보가
        처리될 수 있습니다.
      </p>
      <ul className={clsx(styleP, styleUl)}>
        <li>
          수집되지 않는 정보:
          <ul className={styleUl}>
            <li>이름, 전화번호, 이메일 주소 등 사용자의 개인 식별 정보</li>
            <li>
              신용카드 정보 또는 결제 정보 (모든 결제는 Google Play 및 Apple App Store에서 처리)
            </li>
          </ul>
        </li>
      </ul>
      <h2 className={styleH2}>2. 개인정보의 처리 및 이용 목적</h2>
      <p className={styleP}>
        회사는 사용자의 개인정보를 별도로 저장하거나 관리하지 않습니다. 인앱 결제 기능은 Google Play
        및 Apple App Store의 결제 시스템을 통해 관리되므로, 사용자는 해당 플랫폼의 개인정보
        처리방침을 참고하시기 바랍니다.
      </p>
      <h2 className={styleH2}>3. 개인정보 제3자 제공</h2>
      <p>
        회사는 사용자의 개인정보를 제3자에게 제공하지 않습니다. 단, 다음과 같은 경우에 한해 정보가
        제공될 수 있습니다.
      </p>
      <ul className={clsx(styleP, styleUl, styleMarginTop)}>
        <li>법령에 따른 요청이 있거나, 수사 기관의 적법한 절차에 따른 요청이 있을 경우</li>
        <li>
          Google 및 Apple과 같은 결제 서비스 제공자가 관련 법령 및 약관에 따라 정보를 처리하는 경우
        </li>
      </ul>
      <h2 className={styleH2}>4. 개인정보의 보안 및 보호</h2>
      <p className={styleP}>
        회사는 사용자의 개인정보를 직접 저장하지 않지만, 사용자가 이용하는 Google Play 및 Apple App
        Store의 보안 정책에 따라 결제 정보가 보호됩니다.
      </p>
      <h2 className={styleH2}>5. 개인정보 보유 및 파기</h2>
      <p className={styleP}>
        회사는 사용자의 개인정보를 수집하지 않으므로, 별도의 개인정보 보유 및 파기 절차가 존재하지
        않습니다.
      </p>
      <h2 className={styleH2}>6. 사용자의 권리 및 선택</h2>
      <p className={styleP}>
        사용자는 Google Play 및 Apple App Store에서 제공하는 구독 관리 및 결제 내역 조회 기능을 통해
        결제 내역을 확인하고 구독을 취소할 수 있습니다.
      </p>
      <h2 className={styleH2}>7. 개인정보 처리방침 변경</h2>
      <p className={styleP}>
        본 개인정보 처리방침은 필요에 따라 변경될 수 있으며, 중요한 변경 사항이 있을 경우 앱 내 공지
        또는 업데이트를 통해 사용자에게 안내됩니다.
      </p>
      <h2 className={styleH2}>8. 문의 사항</h2>
      <p className={styleP}>
        본 개인정보 처리방침에 대한 질문이나 문의 사항이 있을 경우, 아래의 연락처로 문의해 주시기
        바랍니다.
      </p>
      <ul className={clsx(styleP, styleUl, styleMarginTop)}>
        <li>회사명: Rovinj Soft</li>
        <li>이메일: rovinjsoft@gmail.com</li>
      </ul>
    </section>
  );
}
