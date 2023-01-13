import { Session } from '@supabase/supabase-js'
import { create } from 'zustand'
import { CategoryState, TagState, UserState } from '../state/initialState'
import { EditedCategory, EditedTag, EditedUser } from '../types/master'

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

  // User
  editedUser: EditedUser
  updatedEditedUser: (payload: EditedUser) => void
  resetEditedUser: () => void
}

const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  // User
  // Category
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
  // Tag
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
  // User
  editedUser: UserState,
  updatedEditedUser: (payload) =>
    set({
      editedUser: {
        id: payload.id,
        name: payload.name,
        url: payload.url,
        avatar: payload.avatar,
      },
    }),
  resetEditedUser: () =>
    set({
      editedUser: UserState,
    }),
}))

export default useStore
