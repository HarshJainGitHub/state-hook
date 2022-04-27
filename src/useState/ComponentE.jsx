import React, {useContext} from 'react'
import ComponentF from './ComponentF';
import { userContext, channelContext } from '../App';

const ComponentE = () => {

  const channel = useContext(channelContext);
  const user = useContext(userContext);
  return (
    <>
      <div>ComponentE - {user} - {channel} </div>
      {/* <ComponentF /> */}
    </>
  )
}

export default ComponentE;