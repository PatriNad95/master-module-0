import React from "react";
import { ListContainer } from "@/pods/list";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";

export const ListScene: React.FC = () => {
  const [selected, setSelected] = React.useState<string>();

  const navigate = useNavigate();

  React.useEffect(() => {
    if (selected) {
      navigate(routes.detail(selected));
    }
  }, [selected]);
  return (
    <>
      <ListContainer onSelect={setSelected} />
      {/* {selected && <DetailContainer id={selected} />} */}
    </>
  );
};
