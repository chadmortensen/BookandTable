export default function LogoMark({ compact = false }) {
  return (
    <img
      className={compact ? 'logo-mark logo-mark--compact' : 'logo-mark'}
      src="/book-table-mark-v2.png"
      alt="An open book held by two hands, with a croissant and cup of coffee on the table"
    />
  )
}
