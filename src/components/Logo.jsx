export default function Logo({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="#ffb62e"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 27c0-7 7-11 16-11s16 4 16 11" />
      <path d="M7 27h34" />
      <path d="M9 31h30c0 3-3 5-6 5H15c-3 0-6-2-6-5z" />
      <path d="M14 22c1-1 3-1 4 0M24 21c1-1 3-1 4 0" />
    </svg>
  )
}
