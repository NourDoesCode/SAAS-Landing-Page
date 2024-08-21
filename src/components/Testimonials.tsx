import { testimonials } from "@/data/testimonialsData";

function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-purple-900 text-3xl text-center md:text-4xl">
          Testimonials
        </h2>
        <h3 className="font-bold text-3xl text-center py-5 md:text-4xl mb-7">
          What builders say about us
        </h3>
        <div className="flex flex-col gap-5  md:grid md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div className="flex flex-col bg-white/50 rounded-lg border p-5 shadow-lg">
              {/*picture + name */}
              <div className="flex gap-4 items-center">
                {/*picture */}
                <img
                  src={testimonial.avatar}
                  alt="avatar"
                  className="flex-shrink-0 rounded-full h-12 w-12"
                />
                {/*name*/}
                <div className="font-semibold md:font-bold">
                  {testimonial.name}
                </div>
              </div>
              {/*description */}
              <p className="py-5">{testimonial.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
