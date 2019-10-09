import  {COUNTDOWN, RESETTIMER} from "../actions/types"

const initialState = {
    seconds: 0
}

export default function(state = initialState, action){
    const {
        type,
        payload
    } = action
    switch(type){
        case COUNTDOWN:
                //console.log("REDUCER COUNTDOWN PAYLOAD", payload)
                //console.log("REDUCER COUNTDOWN TYPE", type)
            return {
                seconds: payload
            }
        case RESETTIMER:
            return {
                seconds: 0
            }
        default:
          return state
      }
}