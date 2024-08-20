import { Divide } from "lucide-react";
import React from "react";

type MilestoneProps = {
  title: string;
  description: string;
  lastItem: boolean;
};

function MileStone({ title, description, lastItem }: MilestoneProps) {
  return (
    <div className="w-full flex gap-5 ">
      <div className="relative flex flex-col items-center h-32">
        {/*Progress circle */}
        <div className="relative z-20 rounded-full bg-gradient-to-b from-pink-500 to-indigo-500 h-4 w-4 flex-shrink-0 ">
          {/*Blur effect : add bigger circle behind smaller circle and make it blurry*/}
          <div className="bg-gradient-to-b from-pink-500 to-indigo-500 h-6 w-6 rounded-full flex-shrink-0 absolute z-10 blur-md"></div>
        </div>
        {/*Progress line */}
        {!lastItem && (
          <div className="absolute z-0 top-2 w-1 bg-gray-400 flex-grow h-full"></div>
        )}
      </div>
      <div>
        <h3 className="milestone_title text-lg font-bold md:text-3xl md:mb-2">
          {title}
        </h3>
        <p className="milestone_description text-gray-600/85 md:text-lg">
          {description}
        </p>
        {!lastItem && <div className="milestone_line"></div>}
      </div>
    </div>
  );
}

export default MileStone;
