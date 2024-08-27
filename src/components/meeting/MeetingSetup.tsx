'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import { Button } from '../ui/button'



const MeetingSetup = ({setIsSetupComplete} : {setIsSetupComplete: Dispatch<SetStateAction<boolean>>}) => {
  const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false)

  const call = useCall()

  if(!call) {
    throw new Error('useCall must be used within StreamCall component')
  }

  useEffect(() => {
   if (isMicCamToggleOn) {
    call?.camera.disable();
    call?.microphone.disable();
   }else {
    call?.microphone.enable();
    call?.camera.enable();
   }
  }, [isMicCamToggleOn, call?.camera, call?.microphone])
  
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">
       Setup
      </h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label htmlFor="" className="flex flex-center justify-center gap-2 font-medium">
          <input 
            type="checkbox" 
            checked={isMicCamToggleOn}
            onChange={(e) => setIsMicCamToggleOn(e.target.checked)}
            name="" 
            id="" 
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
        <Button 
          className='rounded-md bg-green-500 px-4 py-2.5'
          onClick={() => {
            call.join();
            setIsSetupComplete(true)
          }}
        >
          Join meeting
        </Button>
      </div>
    </div>
  )
}

export default MeetingSetup