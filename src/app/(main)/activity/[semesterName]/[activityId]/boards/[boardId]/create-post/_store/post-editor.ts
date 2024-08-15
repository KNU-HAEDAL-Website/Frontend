import { Block } from '@blocknote/core'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface PostEditorProps {
  postContent?: Block[]
  setPostContent: (blocks: Block[]) => void
  getPostContent: () => Block[] | undefined
  clearPostContent: () => void
}

export const usePostEditorStore = create(
  persist<PostEditorProps>(
    (set, get) => ({
      postContent: undefined,
      setPostContent: (block) => {
        set({ postContent: block })
      },
      getPostContent: () => get().postContent,
      clearPostContent: () => {
        set({ postContent: undefined })
      },
    }),
    {
      name: 'post-editor',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
