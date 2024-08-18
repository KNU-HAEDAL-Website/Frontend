export type Post = {
  postId: number
  postTitle: string
  postViews: number
  postActivityStartDate: string
  postActivityEndDate: string
  postCreateDate: string
  userId: string
  userName: string
}

export type PostSlider = {
  postId: number
  postTitle: string
  postImageUrl: string
}

export type PostView = Post & {
  postContent: string
  postImageUrl: string
  boardId: number
  boardName: string
}
