import React from "react";
import { generatePath, Link } from "react-router-dom";
import { MemberEntity } from "./model";
import { MembersContext } from "./members.provider";

export const List: React.FC = () => {
  const { members } = React.useContext(MembersContext);

  return (
    <>
      <h2>Hello from List page</h2>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members ? (
          members.map((member) => (
            <>
              <img src={member.avatar_url} />
              <span>{member.id}</span>
              <Link
                to={generatePath("/private/detail/:id", { id: member.login })}
              >
                {member.login}
              </Link>
            </>
          ))
        ) : (
          <h1>No members</h1>
        )}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
