import { FC } from 'react'

type Props = {
  icon: React.ReactNode
  title: string
}
const PageTitle: FC<Props> = ({ icon, title }) => {
  return (
    <h2 className="mb-12 flex w-full items-end justify-start gap-x-3 border-b-[1.5px] border-gray-700 pb-2 font-mono font-semibold">
      {icon}
      <p>{title}</p>
    </h2>
  )
}

export default PageTitle
