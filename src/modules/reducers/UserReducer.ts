import { JOIN } from "../actions/ChatBotAction";
import { GETUSERS, GETUSERS_FAILURE, GETUSERS_SUCCESS } from "../actions/UserAction";

export type userListType = {
    name: String,
    email : String
}

export type userPayload = {
    data : Array<userListType>,
    userName : String,
}

export type userState = {
    myUserName : String,
    userList: Array<userListType>,
    loading: boolean
}

const initialState: userState = { 
    myUserName: "",
    userList: [],
    loading: false
};

export const UserReducer = (
    state = initialState,
    action: { type: string; payload: userPayload }
  ) => {
      console.log(state, action);

      switch(action.type) {
        case GETUSERS : {
            return {
                ...state,
                loading: true
            }
        }
        case GETUSERS_SUCCESS : {
            return {
                ...state,
                userList: action.payload.data,
                loading: false,
            }   
        }
        case GETUSERS_FAILURE : {
            return {
                ...state,
                loading: false,
            }
        }
        case JOIN : {
            return {
                ...state,
                myUserName : action.payload.userName
            }
        }
        default :
            return state;
        }
};