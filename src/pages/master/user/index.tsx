import { IconBeach } from '@tabler/icons'
import PageTitle from '../../../components/title'
import Layout from '../../../components/layout'
import { Table, ScrollArea } from '@mantine/core'
import useQueryUsers from '../../../hooks/user/useQueryUsers'
import useStore from '../../../store'
import { useMutateUser } from '../../../hooks/user/useMutateUser'
import { useSUbscribeUsers } from '../../../hooks/user/useSubscribeUsers'
import { useState } from 'react'
import { UserCard } from '../../../components/user/card'
import { UserForm } from '../../../components/user/form'

const UserMaster = () => {
  const [opened, setOpened] = useState(false)
  const editedUser = useStore((state) => state.editedUser)
  const update = useStore((state) => state.updatedEditedUser)
  const { createUserMutation, updateUserMutation } = useMutateUser()

  const { data: users } = useQueryUsers()
  useSUbscribeUsers()

  return (
    <Layout title="ユーザー設定" active="master">
      <div className="mx-auto mb-8 flex w-11/12 flex-col md:mb-10 md:w-10/12 xl:w-9/12">
        <PageTitle
          icon={<IconBeach className="h-8 w-8" />}
          title={'User Master'}
        />

        <UserForm
          opened={opened}
          setOpened={setOpened}
          edited={editedUser}
          update={update}
          createMutation={createUserMutation}
          updateMutation={updateUserMutation}
        />

        <ScrollArea className="mx-auto w-full md:w-10/12">
          <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
            <thead>
              <tr>
                <th className="w-1/6"></th>
                <th className="w-4/6">名前</th>
                <th className="w-1/6"></th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    setOpened={setOpened}
                    update={update}
                  />
                ))}
            </tbody>
          </Table>
        </ScrollArea>
      </div>
    </Layout>
  )
}

export default UserMaster
