export type User = {
  userId: string
  studentNumber: number
  userName: string
}

export type ActiveUser = User & {
  role: '해구르르' | '팀장' | '일반'
}
