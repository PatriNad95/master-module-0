import * as api from "./api";
import { mapMembersToVM } from "./list.mapper";

export const getMembers = () => api.getMembers().then(mapMembersToVM);
