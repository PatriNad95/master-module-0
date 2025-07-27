import { AppLayout } from "@/layout";
import { routes } from "@/router";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { createDefaultMemberDetail, MemberDetail } from "./detail.vm";
import { getMember } from "./api";
import { mapMemberToVM } from "./detail.mapper";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <h2>{member.name}</h2>
      <img src={member.avatarUrl} alt="avatar" />
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to={routes.list}>Back to list page</Link>
    </>
  );
};
