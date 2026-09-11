export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0.75" y="0.75" width="38.5" height="38.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 9.5 27.5 30.5h-4.1L20 20.6l-3.4 9.9h-4.1L20 9.5Z" fill="currentColor" />
      <path d="M12 33.5h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
