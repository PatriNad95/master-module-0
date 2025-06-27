import React from "react";
import { MemberEntity } from "./model";
import { MemberRow } from "./member-row.component";

export const MemberList: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>(undefined);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <div className="user-list-container">
      <span className="header">Picture</span>
      <span className="header">Id</span>
      <span className="header">Login</span>
      {members?.map((member) => (
        // <>{MemberRow(member)}</> -- Otra forma de llamar al componente
        <MemberRow member={member} key={member.id} />
      ))}
    </div>
  );
};
