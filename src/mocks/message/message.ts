
import {Message} from "../../models/message/message.interface";
import {PROFILE_LIST} from "../profiles/profiles";

const profileList = PROFILE_LIST;
const messageList:Message[]=[];

profileList.forEach(user=>{
  messageList.push({user:user,date:new Date(),lastMessage:'Hello'})
});

export const MESSAGE_LIST = messageList;
