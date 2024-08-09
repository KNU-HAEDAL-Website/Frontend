import { CreateBoardDetail } from './_components/CreateBoardDetail'
import { CreateBoardHero } from './_components/CreateBoardHero'

const CreateBoardPage = () => {
  return (
    <div className="w-full px-8 pt-10 md:px-20">
      <CreateBoardHero />
      <CreateBoardDetail />
    </div>
  )
}

export default CreateBoardPage
