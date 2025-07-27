import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { Member } from "./list.vm";
import { ListHeader } from "./components";

interface Props {
  members: Member[];
  onSelect: (login: string) => void;
}

export const List: React.FC<Props> = (props) => {
  const { members, onSelect } = props;
  return (
    <>
      <div className="list-user-list-container">
        <ListHeader />
        {members.map((member) => (
          <>
            <img src={member.avatarUrl} />
            <span>{member.id}</span>
            <div
              onClick={() => onSelect(member.login)}
              style={{ color: "indianred", fontWeight: "bold" }}
            >
              {member.login}
            </div>
          </>
        ))}
      </div>
    </>
  );
};
