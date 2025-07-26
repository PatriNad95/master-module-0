import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapMembersToVM = (data: am.Member[]): vm.Member[] =>
  data.map(mapMemberToVM);

const mapMemberToVM = (data: am.Member): vm.Member => ({
  id: data.id.toString(),
  login: data.login,
  avatarUrl: data.avatar_url,
});
