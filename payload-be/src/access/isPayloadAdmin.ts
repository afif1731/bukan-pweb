import { Access } from "payload/config";

export const isPayloadAdmin: Access = ({ req: { user } }) => {
    if(user) {
        if(user.roles?.includes('reader')) {
            return false
        } else if(user.roles?.includes('editor')) {
            return false
        }
        return true
    }
    return false
}