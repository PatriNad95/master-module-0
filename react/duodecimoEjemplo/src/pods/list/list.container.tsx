import React from "react";
import { Member } from "./list.vm";
import { List } from "./list.component";
import { mapMembersToVM } from "./list.mapper";
import { getMembers } from "./list.repository";

interface Props {
  onSelect: (login: string) => void;
}

export const ListContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers().then(setMembers);
  }, []);

  return <List members={members} onSelect={onSelect} />;
};
