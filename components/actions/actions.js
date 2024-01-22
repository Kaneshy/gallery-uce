import cloudinary from 'cloudinary'



export async function likeThread({letter, year}) {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.API_SECRET,
    });
    try {
        console.log(letter, year)
        const results = await cloudinary.v2.search
            // you can add also AND tags=shirt AND uploaded_at>1d AND bytes>1m
            .expression(`resource_type:image AND folder=uce proyect/2020/a`)
            .sort_by('uploaded_at', 'desc')
            .max_results(100)
            .execute();
        const secureUrls = results.resources.map(resource => resource.secure_url);
        return {
            props: {
                secureUrls // Pasar secureUrls como propiedad al componente homePage
            }
        }

    } catch (error) {
        console.error('Error al obtener los resultados de Cloudinary:', error);
        throw error;
    }
}