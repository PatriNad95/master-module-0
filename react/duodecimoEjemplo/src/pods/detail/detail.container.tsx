import { AppLayout } from "@/layout";
import { routes } from "@/router";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { createDefaultMemberDetail, MemberDetail } from "./detail.vm";
import { getMember } from "./api";
import { mapMemberToVM } from "./detail.mapper";
import { Detail } from "./detail.component";

export const DetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetail>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();

  React.useEffect(() => {
    getMember(id).then(mapMemberToVM).then(setMember);
  }, []);

  return (
    <>
      <Detail member={member} />
    </>
  );
};
