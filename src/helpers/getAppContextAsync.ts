import {Client, Context} from '../types'

export const getAppContextAsync = async (client: Client): Promise<Context> => {
  return await client.context()
}

export default getAppContextAsync
