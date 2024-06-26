import { connect } from '@/db/connect'
import Image from '@/db/image.model'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  let result

  try {
    await connect()
    if (query) {
      result = await Image.find({ subjectName: query })
      return Response.json({ message: "success", result })
    } else {
      result = await Image.find()
      return Response.json({ message: "success", result })
    }
  } catch (error : any) {
    return Response.json({ message: error.message })
  }
}