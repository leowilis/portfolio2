import Script from 'next/script';

export default function ScrollRestorationScript() {
  return (
    <Script id='scroll-restoration' strategy='afterInteractive'>
      {`
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }

        try {
          var savedY = sessionStorage.getItem('scroll-y');

          if (savedY !== null) {
            window.scrollTo(0, Number(savedY));
          }
        } catch (error) {}
      `}
    </Script>
  );
}
