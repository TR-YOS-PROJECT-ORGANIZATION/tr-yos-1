import React, { useContext } from "react";
import Card from "../card/Card";
import { YosContext } from "../../context/YosContext";

const Like = () => {
  const { filterrrr, like } = useContext(YosContext);

  const likedItemIds = filterrrr.map((item) => item.id);
  const likedItems = filterrrr.filter((item) => like.includes(item.id));

  console.log(likedItemIds);
  console.log(likedItems);

  return (
    <div>
      {likedItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Like;
