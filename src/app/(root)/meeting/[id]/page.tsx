"use client"

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import MeetingSetup from '@/components/meeting/MeetingSetup';
import MeetingRoom from '@/components/meeting/MeetingRoom';
import { useGetCallById } from '@/hooks/useGetCallById';

const Meeting = ( { params: {id} }: { params: { id: string}}) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false)

  const { call, isCallLoading } = useGetCallById(id)
  
  return (
    <main className="h-screen w-full">
      {/* we need to know within which call we currently in */}
      <StreamCall call={call}>
        <StreamTheme>
          {
            !isSetupComplete ? (
              <MeetingSetup />
            ) : (
              <MeetingRoom />
            )
          }
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting