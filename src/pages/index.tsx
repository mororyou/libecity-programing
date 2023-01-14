import { NextPage } from 'next'
import { Icon360View } from '@tabler/icons'
import Layout from '../components/layout'
import PageTitle from '../components/title'
import dynamic, { Loader } from 'next/dynamic'

const AvoidSSRComponent = dynamic(
  () =>
    import('../components/event/calendar').then(
      (modules) => modules.TuiCalendar
    ),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <Layout title="Programing Event" active="event">
      <div className="mx-auto mb-8 flex w-11/12 flex-col md:mb-10 md:w-10/12 xl:w-9/12">
        <PageTitle
          icon={<Icon360View className="h-8 w-8" />}
          title="イベント"
        />
        <div className="h-[60vh]">
          <AvoidSSRComponent />
        </div>
      </div>
    </Layout>
  )
}

export default Home
