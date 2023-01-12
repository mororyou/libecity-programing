import Link from 'next/link'
import { FC } from 'react'

type Props = {
  title: string
  description: string
  link: string
}

export const MastersCard: FC<Props> = ({ title, description, link }) => (
  <div className="w-full p-4 md:w-1/2 lg:w-1/3">
    <div className="flex h-full w-full flex-col rounded-lg bg-gray-100 p-8">
      <div className="mb-3 flex items-center">
        <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
        </div>
        <h2 className="title-font text-lg font-medium text-gray-900">
          <Link href={link}>{title}</Link>
        </h2>
      </div>
      <div className="flex-grow">
        <p className="ml-4 font-mono text-base leading-relaxed">
          {description}
        </p>
        <Link
          href={link}
          className="float-right mt-3 inline-flex items-center text-indigo-500"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="ml-2 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
)
