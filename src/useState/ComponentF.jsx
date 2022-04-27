import React from 'react'
import { userContext, channelContext } from '../App';

const ComponentF = () => {
  return (
    <div>
        <div>ComponentF</div>
      <userContext.Consumer >
        {
          user => {
            return (
              <channelContext.Consumer>
                {
                  channel => {
                    return (<div>user Context value {user}, channel Context {channel} </div>)
                  }
                }
              </channelContext.Consumer>
            )
          }
        }
      </userContext.Consumer>
    </div>
  )
}

export default ComponentF;