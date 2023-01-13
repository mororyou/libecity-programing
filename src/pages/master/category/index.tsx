import { IconBeach } from '@tabler/icons'
import Layout from '../../../components/layout'
import { Card } from '../../../components/master/card'
import { MasterForm } from '../../../components/master/form'
import PageTitle from '../../../components/title'
import { useMutateCategory } from '../../../hooks/category/useMutateCategory'
import useQueryCategories from '../../../hooks/category/useQueryCategories'
import { useSubscribeCategories } from '../../../hooks/category/useSubscribeCategories'
import useStore from '../../../store'

const UserMaster = () => {
  const editedCategory = useStore((state) => state.editedCategory)
  const update = useStore((state) => state.updateEditedCategory)
  const { createCategoryMutation, updateCategoryMutation } = useMutateCategory()

  const { data: categories } = useQueryCategories()
  useSubscribeCategories()

  return (
    <Layout title="カテゴリ設定" active="master">
      <div className="mx-auto mb-8 flex w-11/12 flex-col md:mb-10 md:w-10/12 xl:w-9/12">
        <PageTitle
          icon={<IconBeach className="h-8 w-8" />}
          title={'Category Master'}
        />

        <MasterForm
          edited={editedCategory}
          update={update}
          createMutation={createCategoryMutation}
          updateMutation={updateCategoryMutation}
        />
        <hr className="my-8" />
        <div className="col-span-1 grid gap-y-4 md:grid-cols-4 md:gap-x-4 md:gap-y-8">
          {categories &&
            categories.map((category) => {
              return (
                <Card
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  order={category.order}
                  update={update}
                />
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export default UserMaster
