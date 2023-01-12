'use client'
import { IconBeach } from '@tabler/icons'
import { MasterForm } from '../../../components/master/form'
import { TableRecord } from '../../../components/master/tr'
import PageTitle from '../../../components/title'
import { useMutateCategory } from '../../../hooks/category/useMutateCategory'
import useQueryCategories from '../../../hooks/category/useQueryCategories'
import { useSubscribeCategories } from '../../../hooks/category/useSubscribeCategories'
import useStore from '../../../store'

/**
 * Category Master Page
 * @returns React.ReactNode
 */

const Categories = () => {
  const editedCategory = useStore((state) => state.editedCategory)
  const update = useStore((state) => state.updateEditedCategory)
  const { createCategoryMutation, updateCategoryMutation } = useMutateCategory()

  const { data: categories } = useQueryCategories()
  useSubscribeCategories()

  return (
    <div className="mx-auto mb-8 flex w-11/12 flex-col md:mb-10 md:w-10/12 xl:w-9/12">
      {/* Title */}
      <PageTitle
        icon={<IconBeach className="h-8 w-8" />}
        title={'Category Master'}
      />

      {/* Form */}
      <MasterForm
        edited={editedCategory}
        update={update}
        createMutation={createCategoryMutation}
        updateMutation={updateCategoryMutation}
      />

      <hr className="my-8" />

      {/* Table */}
      {categories &&
        categories.map((category) => {
          return (
            <TableRecord
              key={category.id}
              id={category.id}
              name={category.name}
              order={category.order}
              update={update}
            />
          )
        })}
    </div>
  )
}

export default Categories
