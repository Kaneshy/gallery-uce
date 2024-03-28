import { likeThread } from '@/components/actions/actions'
import FetchImages from '@/components/fetchImages'

const Page = async ({params}) => {

    const ano = (params.id).split('year')

    const b = await likeThread({
        letter: ano[0],
        year: ano[1]
    })
    const data = b.props.secureUrls

    return (
        <div>
            <FetchImages values={data} valueb={params.id} yearb={ano[1]}/>
        </div>
    )
}

export default Page