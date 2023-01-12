import { IconWritingSign } from '@tabler/icons'
import { FC, FormEvent, memo, useState } from 'react'
import { EditedCategory, EditedTag } from '../../types/master'

type Props = {
  id: string
  name: string
  order: number
  update: any
}

const TableRecordMemo: FC<Props> = ({ id, name, order, update }) => {
  return (
    <li className="flex flex-nowrap items-center py-2">
      <span>
        {id} - {name} - {order}
      </span>
      <IconWritingSign
        className="ml-4 h-6 w-6"
        onClick={() => {
          update({
            id: id,
            name: name,
            order: order,
          })
        }}
      />
    </li>
  )
}

export const TableRecord = memo(TableRecordMemo)
