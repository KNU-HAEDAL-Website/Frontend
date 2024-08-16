type BasePost = {
  postId: number
  postTitle: string
  postImageUrl: string
  postViews: number
  userId: string
  userName: string
  boardId: 0
  boardName: string
}

export type PostRaw = BasePost & {
  postActivityStartDate: string
  postActivityEndDate: string
  postCreateDate: string
}

export type Post = BasePost & {
  postActivityStartDate: Date
  postActivityEndDate: Date
  postCreateDate: Date
}
