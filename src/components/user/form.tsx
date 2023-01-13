import { Drawer, useMantineTheme } from '@mantine/core'
import { FC, FormEvent, memo } from 'react'
import { EditedUser } from '../../types/master'

type Props = {
  opened: boolean
  setOpened: any
  edited: EditedUser
  update: (payload: EditedUser) => void
  createMutation: any
  updateMutation: any
}

const UserFormMemo: FC<Props> = ({
  opened,
  setOpened,
  edited,
  update,
  createMutation,
  updateMutation,
}) => {
  const theme = useMantineTheme()
  const submitEventHandler = (e: FormEvent<HTMLFormElement>) => {
    // ここに Avatar を取得するAPI作りたい
    e.preventDefault()
    if (edited.id === '') {
      createMutation.mutate({
        name: edited?.name,
        url: edited?.url,
      })
    } else {
      updateMutation.mutate({
        id: edited?.id,
        name: edited?.name,
        url: edited?.url,
      })
    }
    setOpened(false)
  }
  return (
    <Drawer
      opened={opened}
      position="right"
      title={edited.id ? 'Update' : 'Create'}
      padding="xl"
      size="40%"
      onClose={() => setOpened(false)}
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      <form
        onSubmit={submitEventHandler}
        className="flex flex-col gap-y-12 px-4 py-6"
      >
        <input
          type="text"
          className="w-full rounded-sm border py-2 px-1 text-sm"
          value={edited.name}
          onChange={(e) => update({ ...edited, name: e.target.value })}
        />
        <input
          type="text"
          className="w-full rounded-sm border py-2 px-1 text-sm"
          value={edited.url}
          onChange={(e) => update({ ...edited, url: e.target.value })}
        />

        <div className="col-span-4 flex items-center justify-center md:col-span-1">
          <button
            type="submit"
            className="rounded border py-1 px-3"
            disabled={!edited.name}
          >
            {edited.id ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </Drawer>
  )
}

export const UserForm = memo(UserFormMemo)
