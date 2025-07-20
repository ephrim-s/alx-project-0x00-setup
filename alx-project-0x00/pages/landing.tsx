import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
        <h1 className="text-xl font-extralight">Landing Page</h1>
        <div className="flex gap-4 flex-wrap">          
          <Button title="Small Button" styles="text-sm rounded-sm" />
          <Button title="Medium Button" styles="text-base rounded-md" />
          <Button title="Large Button" styles="text-lg rounded-lg" />
          <Button title="Large Button" styles="text-lg rounded-full" />
          <Button title="Extra Large Button" styles="text-xl rounded-ful" />
        </div>
        <Card />


    </div>
  );
}
export default Landing;