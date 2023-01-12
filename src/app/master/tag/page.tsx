'use client'
import { IconBeach } from '@tabler/icons'
import { MasterForm } from '../../../components/master/form'
import { Card } from '../../../components/master/card'
import PageTitle from '../../../components/title'
import { useMutateTag } from '../../../hooks/tag/useMutateTag'
import useQUeryTags from '../../../hooks/tag/useQueryTags'
import { useSubscribeTags } from '../../../hooks/tag/useSubscribeTags'
import useStore from '../../../store'

/**
 * Tags Master Page
 * @returns React.ReactNode
 */

const Tags = () => {
  const editedTag = useStore((state) => state.editedTag)
  const update = useStore((state) => state.updateEditedTag)
  const { createTagMutation, updateTagMutation } = useMutateTag()

  const { data: tags } = useQUeryTags()
  useSubscribeTags()

  return (
    <div className="mx-auto mb-8 flex w-11/12 flex-col md:mb-10 md:w-10/12 xl:w-9/12">
      {/* Title */}
      <PageTitle
        icon={<IconBeach className="h-8 w-8" />}
        title={'Tag Master'}
      />

      {/* Form */}
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
  )
}

export default Tags
