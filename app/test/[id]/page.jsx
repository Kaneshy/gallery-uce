import { likeThread } from '@/components/actions/actions'
import FetchImages from '@/components/fetchImages'

const Page = async ({params}) => {

    const ano = (params.id).split('year')
    // const handleFollow = async () => {
    //     console.log('is runing')
    //     const b = await likeThread();
    //     console.log(b)
    // };
    // handleFollow()

    const b = await likeThread({
        letter: ano[0],
        year: ano[1]
    })
    const data = b.props.secureUrls
    console.log(params.id[0])

    return (
        <div>
            <FetchImages values={data} valueb={params.id}/>
        </div>
    )
}

export default Page