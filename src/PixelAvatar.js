import React from 'react';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const stages = [
  { primary: '#3b82f6', trim: '#f59e0b', metal: '#94a3b8' },
  { primary: '#2563eb', trim: '#f59e0b', metal: '#cbd5e1' },
  { primary: '#1d4ed8', trim: '#eab308', metal: '#e2e8f0' },
  { primary: '#0f172a', trim: '#f97316', metal: '#e5e7eb' },
  { primary: '#0b1328', trim: '#f43f5e', metal: '#f8fafc' },
  { primary: '#0b1328', trim: '#06b6d4', metal: '#f8fafc' },
];

function AvatarSprite({ palette }) {
  const hair = '#111827';
  const hairEdge = '#0b1220';
  const skin = '#b86a43';
  const skinShadow = '#9b5838';
  const beard = '#0b1220';
  const shirt = '#f1f5f9';
  const tie = '#e7dec6';
  const suit = '#cbb894';
  const suitShadow = '#b7a37b';
  const suitDeep = '#a9966e';
  const flower = palette.trim;
  const leaf = '#14532d';
  const watch = '#0b1220';

  return (
    <>
      {/* shadow */}
      <rect x="14" y="44" width="20" height="3" fill="rgba(0,0,0,0.35)" />

      {/* head */}
      <rect x="18" y="7" width="12" height="10" fill={skin} />
      <rect x="17" y="9" width="1" height="7" fill={skinShadow} />
      <rect x="30" y="9" width="1" height="7" fill={skinShadow} />

      {/* hair (fade-ish) */}
      <rect x="18" y="5" width="12" height="4" fill={hair} />
      <rect x="17" y="6" width="1" height="6" fill={hair} />
      <rect x="30" y="6" width="1" height="6" fill={hair} />
      <rect x="19" y="9" width="10" height="1" fill={hairEdge} opacity="0.7" />

      {/* face details */}
      <rect x="20" y="10" width="2" height="2" fill={beard} />
      <rect x="26" y="10" width="2" height="2" fill={beard} />
      <rect x="21" y="14" width="6" height="2" fill={beard} opacity="0.9" />
      <rect x="22" y="12" width="4" height="1" fill={beard} opacity="0.65" />

      {/* neck */}
      <rect x="22" y="17" width="4" height="2" fill={skin} />

      {/* shirt + tie */}
      <rect x="20" y="19" width="8" height="4" fill={shirt} />
      <rect x="23" y="19" width="2" height="7" fill={tie} />
      <rect x="22" y="23" width="4" height="2" fill={tie} opacity="0.95" />

      {/* suit torso */}
      <rect x="16" y="22" width="16" height="13" fill={suit} />
      <rect x="16" y="22" width="16" height="2" fill={suitDeep} opacity="0.65" />
      <rect x="16" y="24" width="4" height="11" fill={suitShadow} opacity="0.85" />
      <rect x="28" y="24" width="4" height="11" fill={suitShadow} opacity="0.35" />

      {/* lapels */}
      <rect x="19" y="22" width="3" height="6" fill={suitDeep} opacity="0.6" />
      <rect x="26" y="22" width="3" height="6" fill={suitDeep} opacity="0.45" />

      {/* boutonniere */}
      <rect x="29" y="25" width="1" height="5" fill={leaf} opacity="0.95" />
      <rect x="28" y="26" width="3" height="2" fill={leaf} opacity="0.75" />
      <rect x="29" y="24" width="2" height="2" fill={flower} opacity="0.95" />
      <rect x="30" y="23" width="1" height="1" fill={flower} opacity="0.85" />

      {/* arms (hands clasped) */}
      <rect x="13" y="25" width="3" height="10" fill={suit} />
      <rect x="32" y="25" width="3" height="10" fill={suit} />
      <rect x="16" y="32" width="6" height="3" fill={skin} />
      <rect x="21" y="33" width="7" height="3" fill={skin} />
      <rect x="20" y="33" width="1" height="3" fill={skinShadow} opacity="0.7" />

      {/* watch */}
      <rect x="27" y="32" width="3" height="3" fill={watch} opacity="0.95" />
      <rect x="28" y="31" width="1" height="1" fill={watch} opacity="0.7" />

      {/* legs (animated) */}
      <g className="PixelAvatar-leg PixelAvatar-legLeft">
        <rect x="18" y="35" width="5" height="7" fill="#2b2b2b" opacity="0.9" />
        <rect x="17" y="42" width="6" height="2" fill="#0b1220" opacity="0.9" />
      </g>
      <g className="PixelAvatar-leg PixelAvatar-legRight">
        <rect x="25" y="35" width="5" height="7" fill="#232323" opacity="0.9" />
        <rect x="25" y="42" width="6" height="2" fill="#0b1220" opacity="0.9" />
      </g>
    </>
  );
}

export default function PixelAvatar({
  progress = 0,
  stage = 0,
  inline = false,
  onActivate,
  ariaLabel,
  title,
}) {
  const [viewportWidth, setViewportWidth] = React.useState(
    typeof window === 'undefined' ? 0 : window.innerWidth
  );

  React.useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const travel = Math.max(0, viewportWidth - 140);
  const progressClamped = clamp(progress, 0, 1);
  const x = Math.round(12 + travel * progressClamped);
  const palette = stages[clamp(stage, 0, stages.length - 1)];

  const avatarSvg = (
    <svg
      className={inline ? 'PixelAvatar-svg Inline' : 'PixelAvatar-svg'}
      width="104"
      height="104"
      viewBox="0 0 48 48"
      shapeRendering="crispEdges"
      focusable="false"
    >
      <rect x="2" y="2" width="44" height="44" rx="7" fill="rgba(15,23,42,0.5)" />
      <AvatarSprite palette={palette} />
    </svg>
  );

  if (inline) {
    return (
      <div className="PixelAvatar InlineOnly">
        {avatarSvg}
      </div>
    );
  }

  const isInteractive = typeof onActivate === 'function';
  const resolvedAriaLabel = ariaLabel || 'Pixel avatar';

  return (
    <div className="PixelAvatarDock" aria-hidden={isInteractive ? undefined : true}>
      <div className="PixelTrack" />
      {isInteractive ? (
        <button
          type="button"
          className="PixelAvatarButton"
          style={{ transform: `translate3d(${x}px, 0, 0)` }}
          onClick={onActivate}
          aria-label={resolvedAriaLabel}
          title={title}
        >
          <div className="PixelAvatar">{avatarSvg}</div>
        </button>
      ) : (
        <div className="PixelAvatarPosition" style={{ transform: `translate3d(${x}px, 0, 0)` }}>
          <div className="PixelAvatar">{avatarSvg}</div>
        </div>
      )}
    </div>
  );
}
