import { Session } from '@supabase/supabase-js'
import { create } from 'zustand'
import { CategoryState, TagState } from '../state/initialState'
import { EditedCategory, EditedTag } from '../types/master'

type State = {
  session: Session | null
  setSession: (payload: Session | null) => void
  // Category
  editedCategory: EditedCategory
  updateEditedCategory: (payload: EditedCategory) => void
  resetEditedCategory: () => void
  // Tag
  editedTag: EditedTag
  updateEditedTag: (payload: EditedTag) => void
  resetEditedTag: () => void
}

const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  editedCategory: CategoryState,
  updateEditedCategory: (payload) =>
    set({
      editedCategory: {
        id: payload.id,
        name: payload.name,
        order: payload.order,
      },
    }),
  resetEditedCategory: () =>
    set({
      editedCategory: CategoryState,
    }),
  editedTag: TagState,
  updateEditedTag: (payload) =>
    set({
      editedTag: {
        id: payload.id,
        name: payload.name,
        order: payload.order,
      },
    }),
  resetEditedTag: () =>
    set({
      editedTag: TagState,
    }),
}))

export default useStore
