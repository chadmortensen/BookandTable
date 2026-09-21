export default function LogoMark({ compact = false }) {
  return (
    <img
      className={compact ? 'logo-mark logo-mark--compact' : 'logo-mark'}
      src={`${import.meta.env.BASE_URL}book-table-mark-v4.png`}
      alt="An open book held by two hands, alongside a scone with jam and a steaming cup of tea"
    />
  )
}
