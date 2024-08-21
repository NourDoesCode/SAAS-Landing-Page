import MileStone from "./MileStone";

const roadmap = [
  {
    id: 1,
    name: "Project kickoff",
    description: "Kick-off meeting and requirement gathering",
  },
  {
    id: 2,
    name: "Design",
    description: "Design and prototyping",
  },
  {
    id: 3,
    name: "Development",
    description: "Development and testing",
  },

  {
    id: 4,
    name: "Deployment",
    description: "Deployment and final testing",
  },
  {
    id: 5,
    name: "Maintenance",
    description: "Maintenance and support",
  },
];

function RoadmapSection() {
  return (
    <section className="py-20 max-w-4xl mx-auto ">
      <h1 className="text-center text-3xl font-bold mb-10 md:text-6xl md:pb-11">
        Roadmap
      </h1>
      <div className="flex justify-center">
        <div className="inline-flex flex-col items-start ">
          {roadmap.map((roadmapItem, index) => (
            <MileStone
              key={roadmapItem.id}
              title={roadmapItem.name}
              description={roadmapItem.description}
              lastItem={index === roadmap.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;
