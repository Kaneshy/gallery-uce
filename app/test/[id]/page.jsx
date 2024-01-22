import { likeThread } from '@/components/actions/actions'
import FetchImages from '@/components/fetchImages'

const page = async ({params}) => {

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
   


    return (
        <div>
            <FetchImages values={data}/>
        </div>
    )
}

export default page