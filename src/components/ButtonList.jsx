import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex mt-10 space-x-2 overflow-x-auto no-scrollbar">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="Gaming" />
      <Button name="News" />
      <Button name="Sports" />
      <Button name="Chess" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="Soccer" />
    </div>
  );
};

export default ButtonList;
