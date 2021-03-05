import { parseISO, format } from 'date-fns';
import { fr } from 'date-fns/locale'

export default function formatDate(date) {
  return format(parseISO(date), 'dd MMMM yyyy', { locale: fr })
}