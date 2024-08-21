import { featuresData } from "@/data/featuresData";

function Features() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-purple-900 text-3xl text-center md:text-4xl">
          Features
        </h2>
        <h3 className="font-bold text-3xl text-center py-5 md:text-4xl mb-7">
          Intelligent Form Building
        </h3>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/50 rounded-lg border p-5 shadow-lg"
            >
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-gray-600/85 md:text-lg py-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
