import { FC, memo } from 'react'
import { Avatar, Text, ActionIcon } from '@mantine/core'
import { User } from '../../types/master'
import { IconWriting } from '@tabler/icons'
type Props = {
  user: User
  setOpened: any
  update: any
}

export const UserCardMemo: FC<Props> = ({ user, setOpened, update }) => {
  return (
    <tr>
      <td>
        <Avatar size={40} src={user.avatar} radius={40} />
      </td>
      <td className="flex flex-col gap-y-2">
        <Text size="sm" weight={500}>
          {user.name}
        </Text>
        <a href={user.url} target="_blank" rel="noopener noreferrer">
          <span className="w-auto rounded-full bg-blue-700 py-1 px-2 text-[0.5rem] text-white hover:bg-opacity-70 ">
            リベシティプロフィール
            {/* </span> */}
          </span>
        </a>
      </td>
      <td>
        <ActionIcon variant="subtle">
          <IconWriting
            size={16}
            onClick={(e) => {
              e.preventDefault()
              update({
                id: user.id,
                name: user.name,
                url: user.url,
                avatar: user.avatar,
              })
              setOpened(true)
            }}
          />
        </ActionIcon>
      </td>
    </tr>
  )
}

export const UserCard = memo(UserCardMemo)
