import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Leonardo Wilis — Frontend Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const geistSansBold = await fetch(
    new URL('https://gstatic.com', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#08080a',
        color: '#ffffff',
        position: 'relative',
      }}
    >
      {/* Decorative Aura Spotlights */}
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          right: -120,
          top: 70,
          borderRadius: '9999px',
          background:
            'radial-gradient(circle, rgba(167,139,250,0.18), rgba(167,139,250,0) 70%)',
        }}
      />

      {/* Main Core Brand Typography Grid */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: '0.28em',
            color: 'rgba(255,255,255,0.45)',
            fontFamily: 'Geist',
          }}
        >
          FRONTEND DEVELOPER
        </div>

        <div
          style={{
            fontSize: 76,
            fontWeight: 600,
            letterSpacing: '-0.055em',
            fontFamily: 'Geist',
          }}
        >
          Leonardo Wilis
        </div>

        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.48)',
            maxWidth: 720,
            lineHeight: 1.4,
            fontFamily: 'Geist',
          }}
        >
          Building modern, performant, and immersive web experiences.
        </div>
      </div>

      {/* Footer Branding Token info row */}
      <div
        style={{
          position: 'absolute',
          bottom: 70,
          left: 80,
          fontSize: 18,
          letterSpacing: '0.18em',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'Geist',
        }}
      >
        LEONARDO WILIS
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: geistSansBold,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}
