import FullCalendar, { EventContentArg } from '@fullcalendar/react'
import allLocales from '@fullcalendar/core/locales-all'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import { memo, useState } from 'react'
import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'

type Props = {
  status: string
  prefectures: string
}

export const CalendarMemo = () => {
  const [day, setDay] = useState({
    date: '',
    count: 0,
    events: {},
  })

  const handleDateClick = async (arg: DateClickArg) => {}

  const handleLabelClick = async (date: string) => {}

  const getDayEventHandler = async (date: string) => {}

  const getCalendarData = async (
    arg: any,
    status: string,
    successCallback: any,
    failureCallback: any
  ) => {
    try {
      const startDate = await format(arg.start, 'yyyy-MM-dd')
      const endDate = await format(arg.start, 'yyyy-MM-dd')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="ja"
        height={'auto'}
        headerToolbar={{
          start: 'title',
          center: '',
          end: 'today prev,next',
        }}
      />
    </>
  )
}

const renderEventContent = (arg: EventContentArg, handleLabelClick: any) => {
  return <div></div>
}

export const Calendar = memo(CalendarMemo)
