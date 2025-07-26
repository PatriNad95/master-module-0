import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { Member } from "./list.vm";
import { ListHeader } from "./components";

interface Props {
  members: Member[];
}

export const List: React.FC<Props> = (props) => {
  const { members } = props;
  return (
    <>
      <div className="list-user-list-container">
        <ListHeader />
        {members.map((member) => (
          <>
            <img src={member.avatarUrl} />
            <span>{member.id}</span>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </>
        ))}
      </div>
    </>
  );
};
