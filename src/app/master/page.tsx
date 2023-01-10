import { MastersCard } from './card'

const Master = () => {
  return (
    <div className="mx-auto mb-8 flex w-11/12 flex-col md:mb-10 md:w-10/12 xl:w-9/12">
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
              Master Setting
            </h1>
          </div>
          <div className="-m-4 flex flex-wrap">
            <MastersCard
              title="Category Settings"
              description="Event登録時に利用するカテゴリ"
              link="/master/category"
            />
            <MastersCard
              title="Tag Settings"
              description="Lightning Talkを登録時に利用するタグ"
              link="/master/tag"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Master
