export type User = {
  userId: string
  studentNumber: number
  userName: string
}

export type Role = '해구르르' | '팀장' | '일반'

export type ActiveUser = User & {
  role: Role
}
