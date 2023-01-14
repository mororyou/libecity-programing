import { memo } from 'react'
import Calendar from '@toast-ui/react-calendar'
import '@toast-ui/calendar/dist/toastui-calendar.min.css'

const TuiCalendarMemo = () => {
  const calendars = [{ id: 'cal1', name: 'Personal' }]

  const initialEvents = [
    {
      id: '1',
      calendarId: 'cal1',
      title: 'Lunch',
      category: 'time',
      start: '2023-01-28T12:00:00',
      end: '2023-01-28T13:30:00',
    },
    {
      id: '2',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2023-01-14T15:00:00',
      end: '2023-01-15T15:30:00',
    },
  ]

  return (
    <Calendar
      height="100%"
      view="month"
      month={{
        dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      }}
      calendars={calendars}
      events={initialEvents}
    />
  )
}

export const TuiCalendar = memo(TuiCalendarMemo)
