import { useEffect, useState } from "react"

import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>()
  const [isCallLoading, setIsCallLoading] = useState(true)

  const client = useStreamVideoClient();

  // we can't write a  async function inside a  useEffect unless been defined in a new function
  useEffect(() => {
    if(!client) return;

    const loadCall = async () => {
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id
        }
      })

      if(calls.length) setCall(calls[0])

      setIsCallLoading(false);
    }

    loadCall();

  }, [client, id])

  return { call, isCallLoading}
}