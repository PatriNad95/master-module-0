import React, { PropsWithChildren } from "react";
import { MemberEntity } from "./model";

interface MemberContextModel {
  members: MemberEntity[];
}

export const MembersContext = React.createContext<MemberContextModel>(null);

export const MembersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>(null);
  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);
  return (
    <MembersContext.Provider value={{ members }}>
      {children}
    </MembersContext.Provider>
  );
};
