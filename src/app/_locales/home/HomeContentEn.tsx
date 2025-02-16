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
        <h1 className={styleH1}>Smart Shopping</h1>
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
        <h2 className={clsx(styleH2, styledPadBot)}>Simple Way to Calculate Off Prices</h2>
        <center>
          <img
            alt="calculator screen"
            ref={imgRef02}
            className={styledScImg}
            src="/smart-shopping-site/screenshot/smartshopping_calculator.png"
          />
        </center>
        <ul className={styledPadTop}>
          <li>Easily calculate the price for ‘Buy 2, Get 1 Free’ deals!</li>
          <li>Tired of applying 10% off, 20% off over and over again?</li>
          <li>Easily calculate the final price with Smart Shopping!</li>
        </ul>
      </section>
      <section className={styledPadding}>
        <h2 className={clsx(styleH2, styledPadBot)}>Calculate Price per Pack or per Unit</h2>
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
          <li>Include both off-price calculations and unit/pack pricing!</li>
          <li>Easily calculate price per unit or per pack</li>
        </ul>
      </section>
      <section className={styledPadding}>
        <h2 className={clsx(styleH2, styledPadBot)}>Cart</h2>
        <center>
          <img
            alt="shopping cart screen"
            ref={imgRef05}
            className={styledScImg}
            src="/smart-shopping-site/screenshot/smartshopping_cart.png"
          />
        </center>
        <ul className={styledPadTop}>
          <li>Shopping with Smart Shopping!</li>
          <li>Add the calculated price to your cart and easily calculate the total.</li>
          <li>Save more and spend smarter with Smart Shopping!</li>
        </ul>
      </section>
      <section className={styledPadding}>
        <h2 className={clsx(styleH2, styledPadBot)}>Price Breakdown: Off, Unit & Pack</h2>
        <center>
          <img
            alt="Price Breakdown: Off, Unit & Pack screen"
            ref={imgRef06}
            className={styledScImg}
            src="/smart-shopping-site/screenshot/smartshopping_detail.png"
          />
        </center>
        <ul className={styledPadTop}>
          <li>Review your calculated price and see the breakdown easily.</li>
          <li>Check your calculated price and understand why it was added.</li>
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
