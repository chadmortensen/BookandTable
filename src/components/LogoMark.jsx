export default function LogoMark({ compact = false }) {
  return (
    <svg className={compact ? 'logo-mark logo-mark--compact' : 'logo-mark'} viewBox="0 0 260 180" role="img" aria-label="An open book held by two hands, with pastries nearby">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M63 52c26-6 47 2 67 21 20-19 41-27 67-21v83c-26-6-47 1-67 19-20-18-41-25-67-19V52Z" />
        <path d="M130 73v81M84 72c14-1 26 3 35 10M84 87c13-1 24 3 33 9M176 72c-14-1-26 3-35 10M176 87c-13-1-24 3-33 9" />
        <path className="logo-ribbon" d="M143 68v58l9-8 9 8V60" />
        <path d="M64 111c-14-5-27-1-39 12-8 8-12 18-11 29 16-10 33-12 51-6M196 111c14-5 27-1 39 12 8 8 12 18 11 29-16-10-33-12-51-6" />
        <path d="M34 107c-8-7-13-15-16-25M226 107c8-7 13-15 16-25" />
        <path d="M28 57c-10 6-13 15-7 26 6 8 17 9 26 2 7-7 7-16 1-23-5-7-12-8-20-5Z" />
        <path d="M216 51c-9 4-12 12-8 22 5 9 16 11 25 5 8-5 9-14 4-22-5-7-12-9-21-5Z" />
        <path d="M24 68c7 1 13 5 18 12M211 61c9 1 16 5 22 12" />
      </g>
    </svg>
  )
}
