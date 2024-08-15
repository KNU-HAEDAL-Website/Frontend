'use client'

import { useEffect, useMemo, useState } from 'react'

import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'

import { usePostEditorStore } from '~create-post/_store/post-editor'

export const PostContentFieldEditor = () => {
  const { setPostContent, getPostContent } = usePostEditorStore()
  const [initialContent, setInitialContent] = useState<
    'loading' | PartialBlock[] | undefined
  >('loading')

  useEffect(() => {
    const storedBlocks = getPostContent()
    setInitialContent(storedBlocks)
  }, [getPostContent])

  const editor = useMemo(() => {
    if (initialContent === 'loading') {
      return undefined
    }
    return BlockNoteEditor.create({ initialContent })
  }, [initialContent])

  if (editor === undefined) {
    return <div>글 불러오는 중...</div>
  }

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        setPostContent(editor.document as Block[])
      }}
      className="h-96 overflow-auto rounded-md border pt-4"
    />
  )
}
