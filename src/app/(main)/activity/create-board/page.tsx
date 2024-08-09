import { CreateBoardDetail } from './_components/CreateBoardDetail'
import { CreateBoardForm } from './_components/CreateBoardForm'
import { CreateBoardHero } from './_components/CreateBoardHero'

const CreateBoardPage = () => {
  return (
    <div className="w-full px-8 pt-10 md:px-20">
      <CreateBoardHero />
      <CreateBoardDetail />
      <CreateBoardForm />
    </div>
  )
}

export default CreateBoardPage
