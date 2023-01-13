import { IconBeach } from '@tabler/icons'
import Layout from '../../../components/layout'
import { Card } from '../../../components/master/card'
import { MasterForm } from '../../../components/master/form'
import PageTitle from '../../../components/title'
import { useMutateTag } from '../../../hooks/tag/useMutateTag'
import useQueryTags from '../../../hooks/tag/useQueryTags'
import { useSubscribeTags } from '../../../hooks/tag/useSubscribeTags'
import useStore from '../../../store'

const TagMaster = () => {
  const editedTag = useStore((state) => state.editedTag)
  const update = useStore((state) => state.updateEditedTag)
  const { createTagMutation, updateTagMutation } = useMutateTag()

  const { data: tags } = useQueryTags()
  useSubscribeTags()

  return (
    <Layout title="タグマスタ設定" active="master">
      <div className="mx-auto mb-8 flex w-11/12 flex-col md:mb-10 md:w-10/12 xl:w-9/12">
        {/* Title */}
        <PageTitle
          icon={<IconBeach className="h-8 w-8" />}
          title={'Tag Master'}
        />

        <MasterForm
          edited={editedTag}
          update={update}
          createMutation={createTagMutation}
          updateMutation={updateTagMutation}
        />

        <hr className="my-8" />

        {/* Table */}
        <div className="col-span-1 grid gap-y-4 md:grid-cols-4 md:gap-x-4 md:gap-y-8">
          {tags &&
            tags.map((tag) => {
              return (
                <Card
                  key={tag.id}
                  id={tag.id}
                  name={tag.name}
                  order={tag.order}
                  update={update}
                />
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default TagMaster
