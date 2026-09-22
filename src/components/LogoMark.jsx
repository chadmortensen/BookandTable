export default function LogoMark({ compact = false }) {
  const logoUrl = `${import.meta.env.BASE_URL}book-table-mark-v4.png`

  return (
    <span
      className={compact ? 'logo-mark logo-mark--compact' : 'logo-mark'}
      role="img"
      aria-label="An open book held by two hands, alongside a scone with jam and a steaming cup of tea"
      style={{ WebkitMaskImage: `url("${logoUrl}")`, maskImage: `url("${logoUrl}")` }}
    />
  )
}
