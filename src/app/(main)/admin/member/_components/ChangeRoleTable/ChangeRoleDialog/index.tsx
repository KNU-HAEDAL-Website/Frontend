import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ActiveUser } from '@/types/user'

type ChangeRoleDialogProps = {
  member: ActiveUser
}

export const ChangeRoleDialog = ({ member }: ChangeRoleDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="h-fit p-1.5 text-sm">
          {member.role}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div>팝업 테스트</div>
      </DialogContent>
    </Dialog>
  )
}
