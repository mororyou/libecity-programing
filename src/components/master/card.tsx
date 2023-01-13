import { IconWritingSign } from '@tabler/icons'
import { FC, FormEvent, memo, useState } from 'react'
import { EditedCategory, EditedTag } from '../../types/master'

type Props = {
  id: string
  name: string
  order: number
  update: any
}

const CardMemo: FC<Props> = ({ id, name, order, update }) => {
  return (
    <div className="col-span-1 grid grid-cols-12 gap-x-4 rounded-md border py-8 px-6 shadow-md">
      <p className="col-span-10 font-mono text-lg font-bold">{name}</p>
      <IconWritingSign
        className="col-span-1 h-10 w-10 cursor-pointer rounded-full bg-opacity-50 p-2 text-gray-700 hover:bg-gray-700 hover:text-white"
        onClick={() => {
          update({
            id: id,
            name: name,
            order: order,
          })
        }}
      />
    </div>
  )
}

export const Card = memo(CardMemo)
