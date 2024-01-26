export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es-MX").format(date);
}
