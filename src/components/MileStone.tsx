import React from "react";

type MilestoneProps = {
  title: string;
  description: string;
  lastItem: boolean;
};

function MileStone({ title, description, lastItem }: MilestoneProps) {
  return (
    <div className="milestone">
      <div className="milestone_content">
        <h3 className="milestone_title">{title}</h3>
        <p className="milestone_description">{description}</p>
      </div>
      {!lastItem && <div className="milestone_line"></div>}
    </div>
  );
}

export default MileStone;
