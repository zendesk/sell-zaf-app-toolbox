import {useState, useEffect, useContext} from 'react'

import {
  Client,
  AppLocation,
  Feedback,
  FeedbackStatus,
  ClientResponse,
  AppLocations,
  ChangedProperty,
} from '../types'
import {ZAFClientContext} from '../providers/ZAFClientContext'
import {getAppContextAsync} from '../helpers/getAppContextAsync'

const API_EMAIL_FIELD_PER_LOCATION = {
  [AppLocations.personCard]: 'contact.email',
  [AppLocations.companyCard]: 'contact.email',
  [AppLocations.leadCard]: 'lead.email',
  [AppLocations.dealCard]: 'deal.contact.email',
}

const getSellContactEmail = async (
  client: Client,
  location: AppLocation,
): Promise<string> => {
  const contactEmailField = API_EMAIL_FIELD_PER_LOCATION[location]
  const result = await client.get<{errors: object}>(contactEmailField)
  if (result.errors && Object.keys(result.errors).length > 0)
    throw new Error(JSON.stringify(result.errors))
  return result[contactEmailField]
}

export function useSellContactEmail(): ClientResponse {
  const client = useContext(ZAFClientContext)
  const [data, setData] = useState<string | null>(null)
  const [error, setError] = useState<any | null>(null)
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  const getSellContactEmailForLocation = async () => {
    if (!client) {
      throw new Error('You forgot to use ZAFClientContext')
    }

    setFeedback({status: FeedbackStatus.loading})
    try {
      const {location} = await getAppContextAsync(client)
      const result = await getSellContactEmail(client, location)
      setData(result)
      setFeedback({status: FeedbackStatus.success})

      // listens to the contact email change
      client.on(
        `${API_EMAIL_FIELD_PER_LOCATION[location]}.changed`,
        (property: ChangedProperty<string>) => {
          setData(property.newValue)
        },
      )
    } catch (e) {
      setError(e)
      setFeedback({status: FeedbackStatus.error})
    }
  }

  useEffect(() => {
    getSellContactEmailForLocation()
  }, [])

  return {
    data,
    error,
    feedback,
  }
}

export default useSellContactEmail
