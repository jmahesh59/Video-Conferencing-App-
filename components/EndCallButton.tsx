import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'

import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function EndCallButton() {

 const call = useCall();
 const { useLocalParticipant } = useCallStateHooks();
 const router = useRouter();
 const localParticipant = useLocalParticipant();

 const isMeetingOwer = localParticipant && call?.state.createdBy && localParticipant.userId === call.state.createdBy.id;

 if(!isMeetingOwer) return null;
  return (

    <Button onClick={async ()=>{
        await call.endCall();
        router.push('/')
    }} className='bg-red-500'>
        End call for everyone
    </Button>
  )
}

export default EndCallButton
