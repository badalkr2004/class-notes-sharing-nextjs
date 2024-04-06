import Image from '@/db/image.model'
import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
let result
  if(query){
       result = await Image.find({subjectName:query})
  }else{
    result = await Image.find()
  }


  return Response.json({message:"hello from Backend",result})
}