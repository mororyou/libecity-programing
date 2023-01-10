import { format, formatDistanceToNowStrict } from 'date-fns'
import ja from 'date-fns/locale/ja'

export const dateCnv = (date: string) => {
  const parseDate = new Date(date)
  const res = format(parseDate, 'yyyy年M月d日(E)', { locale: ja })
  return res
}

export const beforeDateComv = (date: string) => {
  const parseDate = new Date(date)
  const diffDate = formatDistanceToNowStrict(parseDate, {
    unit: 'day',
    locale: ja,
  })

  let res
  if (diffDate.slice(0, -1) === '0') {
    res = '本日'
  } else {
    res = `${diffDate}前`
  }

  return res
}
