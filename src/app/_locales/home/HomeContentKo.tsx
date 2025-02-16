/* eslint-disable @next/next/no-img-element */
import { css } from '#/styled-system/css';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fragment, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const styleH1 = css({
  textAlign: 'center',
  fontSize: '6xl',
  fontWeight: 'bold',
});

const styleH2 = css({
  textAlign: 'center',
  fontSize: '4xl',
  fontWeight: 'bold',
});

const styledImg = css({
  width: '5em',
  height: '5em',
});

const styledScImg = css({
  width: '60%',
  height: '60%',
  // margin: '150px auto', // 수직 중앙 배치 (필요에 따라 조정)
  overflow: 'hidden',
  position: 'relative',
  // 기본 상태: 이미지가 확대되어 있음 (scale 1.2)
  opacity: 0,
  transform: 'scale(0.4)',
});

const styledPadding = css({
  width: '100vw',
  padding: '2rem 2rem',
});

const styledPadBot = css({
  paddingBottom: '1.5rem',
});

const styledPadTop = css({
  paddingTop: '1.5rem',
});

export default function HomeContentEn() {
  const imgRef01 = useRef<HTMLImageElement>(null);
  const imgRef02 = useRef<HTMLImageElement>(null);
  const imgRef03 = useRef<HTMLImageElement>(null);
  const imgRef04 = useRef<HTMLImageElement>(null);
  const imgRef05 = useRef<HTMLImageElement>(null);
  const imgRef06 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    [imgRef01, imgRef02, imgRef03, imgRef04, imgRef05, imgRef06].forEach((refEl) => {
      const el = refEl.current;
      if (!el) return;

      gsap.to(el, {
        scrollTrigger: {
          trigger: el, // 애니메이션 트리거 대상
          // start: 'top 80%', // 뷰포트의 80% 지점에서 시작
          // end: 'bottom 60%', // 뷰포트의 60% 지점에서 끝
          start: 'top 80%', // 요소의 상단이 뷰포트 하단에 닿는 순간 트리거
          // once: true, // 애니메이션은 한 번만 실행
          toggleActions: 'play none none none',
          // markers: true, // 트리거 위치를 화면에 표시 (디버깅용)
        },
        opacity: 1, // 불투명도 0 -> 1 (fade-in)
        scale: 1, // scale 0.4 -> 1 (크기 확대)
        duration: 1, // 애니메이션 지속 시간(초)
        ease: 'power2.out',
      });
    });
  }, []);
  return (
    <Fragment>
      <section className={styledPadding}>
        <h1 className={styleH1}>알뜰계산기</h1>
        <center>
          <img
            alt="application icon"
            ref={imgRef01}
            className={styledImg}
            src="/smart-shopping-site/icon_body.png"
          />
        </center>
      </section>
      <section className={styledPadding}>
        <h2 className={clsx(styleH2, styledPadBot)}>간편한 할인 가격계산</h2>
        <center>
          <img
            alt="calculator screen"
            ref={imgRef02}
            className={styledScImg}
            src="/smart-shopping-site/screenshot/smartshopping_calculator.png"
          />
        </center>
        <ul className={styledPadTop}>
          <li>쉽게 2+1 가격을 계산하세요!</li>
          <li>10%, 20%, 할인이 여러 번 반복될 때 불편하셨죠?</li>
          <li>알뜰계산기로 편하게 계산할 수 있습니다</li>
        </ul>
      </section>
      <section className={styledPadding}>
        <h2 className={clsx(styleH2, styledPadBot)}>중량, 묶음 가격계산</h2>
        <center>
          <img
            alt="per unit screen"
            ref={imgRef03}
            className={styledScImg}
            src="/smart-shopping-site/screenshot/smartshopping_weight.png"
          />
          <img
            alt="per pack screen"
            ref={imgRef04}
            className={styledScImg}
            src="/smart-shopping-site/screenshot/smartshopping_pack.png"
          />
        </center>
        <ul className={styledPadTop}>
          <li>할인 가격 계산과 함께, 중량과 묶음도 포함해보세요</li>
          <li>무게 당 가격과 묶음 상품 가격을 간편하게 계산할 수 있습니다</li>
        </ul>
      </section>
      <section className={styledPadding}>
        <h2 className={clsx(styleH2, styledPadBot)}>장바구니</h2>
        <center>
          <img
            alt="shopping cart screen"
            ref={imgRef05}
            className={styledScImg}
            src="/smart-shopping-site/screenshot/smartshopping_cart.png"
          />
        </center>
        <ul className={styledPadTop}>
          <li>마트갈 때는 알뜰계산기와 함께!</li>
          <li>상품 가격을 장바구니에 담으면 합계를 계산할 수 있습니다</li>
          <li>이제 알뜰 계산기로 알뜰한 쇼핑, 절약하는 쇼핑하세요</li>
        </ul>
      </section>
      <section className={styledPadding}>
        <h2 className={clsx(styleH2, styledPadBot)}>상세한 가격 정보</h2>
        <center>
          <img
            alt="Price Breakdown: Off, Unit & Pack screen"
            ref={imgRef06}
            className={styledScImg}
            src="/smart-shopping-site/screenshot/smartshopping_detail.png"
          />
        </center>
        <ul className={styledPadTop}>
          <li>장바구니에서 상세 가격을 볼 수 있습니다</li>
          <li>계산했던 가격을 다시 확인할 수 있습니다</li>
          <li>왜 이 가격이 담겼는지 쉽게 확인해보세요</li>
        </ul>
      </section>
      <section className={styledPadding}>
        <center className={styledPadBot}>
          <a href="mailto:rovinjsoft@gmail.com">support: rovinjsoft@gmail.com</a>
        </center>
      </section>
    </Fragment>
  );
}
