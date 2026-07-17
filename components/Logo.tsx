'use client';

const logoSrc = '/logo.png';

interface LogoProps { className?: string; height?: number }

/**
 * The logo is pre-cropped to the core symbol and rendered at a fixed aspect
 * ratio so the icon stays clean and sharp at small sizes.
 */
export default function Logo({ className = '', height = 64 }: LogoProps) {
  const width = Math.round((650 / 452) * height);

  return (
    <div
      role="img"
      aria-label="Bohdan.dev"
      className={className}
      style={{
        width,
        height,
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        borderRadius: height / 2,
        border: '1px solid rgba(57,255,106,0.25)',
        backgroundColor: 'rgba(255,255,255,0.06)',
        boxShadow: '0 0 10px rgba(57,255,106,0.18)',
      }}
    >
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}