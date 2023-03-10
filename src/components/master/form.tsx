import { FC, FormEvent, memo } from 'react'
import { EditedCategory, EditedTag } from '../../types/master'

type Props = {
  edited: EditedCategory | EditedTag
  update: ((payload: EditedCategory) => void) | ((payload: EditedTag) => void)
  reset: () => void
  createMutation: any
  updateMutation: any
}

export const MasterFormMemo: FC<Props> = ({
  edited,
  update,
  reset,
  createMutation,
  updateMutation,
}) => {
  const submitEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (edited.id === '') {
      createMutation.mutate({
        name: edited?.name,
        order: 0,
      })
    } else {
      updateMutation.mutate({
        id: edited?.id,
        name: edited?.name,
        order: 0,
      })
    }
  }

  return (
    <form onSubmit={submitEventHandler}>
      <div className="grid grid-cols-8 items-center gap-x-4 gap-y-4">
        {/* Input */}
        <div className="col-span-8 md:col-span-5">
          <input
            type={'text'}
            className="w-full rounded-sm border py-2 px-1 text-sm"
            value={edited.name}
            onChange={(e) => update({ ...edited, name: e.target.value })}
          />
        </div>

        {/* Store Button */}
        <div className="col-span-4 flex items-center justify-center md:col-span-1">
          <button
            type="submit"
            className="rounded border py-1 px-3"
            disabled={!edited.name}
          >
            {edited.id ? 'Update' : 'Create'}
          </button>
        </div>
        {/* Reset Button */}
        <div className="col-span-4 flex items-center justify-center md:col-span-1">
          <button
            type="button"
            className="rounded border py-1 px-3"
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  )
}
export const MasterForm = memo(MasterFormMemo)
