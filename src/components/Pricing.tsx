import { BadgeCheck } from "lucide-react";
import React from "react";
import { Button } from "./ui/Button";

function Pricing() {
  return (
    <section className="">
      <div className="container ">
        <h2 className="text-purple-900 text-3xl text-center md:text-4xl">
          Pricing
        </h2>
        <h3 className="font-bold text-3xl text-center py-5 md:text-4xl mb-8">
          Flexible Pricing to Fit Your Growth
        </h3>
        {/*all three pricing cards */}
        <div className="md:flex gap-5 grid grid-cols-1 ">
          {/*Hobby plan */}
          <div className="bg-white/50 rounded-lg border p-5 shadow-lg px-7 flex-1 flex flex-col justify-between">
            <div>
              {/* This div wraps all content except the button to push the button to the bottom */}
              <div className="flex items-end gap-3">
                <p className="text-4xl font-bold">0</p>
                <p className="text-gray-600 text-md">/month</p>
              </div>
              <p className="text-3xl font-bold pt-3">Hobby Plan</p>
              <p className="py-3">For individuals and hobbyists</p>
              <hr />
              <div className="py-3 flex gap-2 items-center">
                <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                <p>Up to 3 forms per month</p>
              </div>
              <div className="py-3 flex gap-2 items-center">
                <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                <p>Basic AI form builder</p>
              </div>
              <div className="py-3 flex gap-2 items-center">
                <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                <p>Basic form customization</p>
              </div>
              <div className="py-3 flex gap-2 items-center">
                <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                <p>Data export in CSV format</p>
              </div>
            </div>
            <Button className="bg-[#a94cf7] w-full hover:bg-purple-700 font-semibold mt-4 ">
              {" "}
              {/* mb-5 to add 20px spacing to the bottom */}
              Select Plan
            </Button>
          </div>

          {/* Pro plan */}
          <div className="flex flex-col ">
            <div className="bg-[#a94cf7] rounded-t-lg text-center text-lg font-semibold text-white  py-1">
              Popular
            </div>
            <div className="bg-white/50 rounded-b-lg border p-5 shadow-lg px-7 flex-1 flex flex-col justify-between py-7">
              <div>
                {/* Content container to push the button to the bottom */}
                <div className="flex items-end gap-3">
                  <p className="text-4xl font-bold">15</p>
                  <p className="text-gray-600 text-md">/month</p>
                </div>
                <p className="text-3xl font-bold pt-3">Pro Plan</p>
                <p className="py-3">
                  Perfect for growing businesses needing advanced features
                </p>
                <hr />
                <div className="py-3 flex gap-2 items-center">
                  <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                  <p>Up to 100 forms per month</p>
                </div>
                <div className="py-3 flex gap-2 items-center">
                  <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                  <p>Data export in CSV and Excel formats</p>
                </div>
                <div className="py-3 flex gap-2 items-center">
                  <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                  <p>Conditional logic and branching</p>
                </div>
                <div className="py-3 flex gap-2 items-center">
                  <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                  <p>Basic analytics and reporting</p>
                </div>
              </div>
              <Button className="bg-[#a94cf7] w-full hover:bg-purple-700 font-semibold mt-4 ">
                Select Plan
              </Button>
            </div>
          </div>
          {/*Enterprise plan */}
          <div className="bg-white/50 rounded-lg border p-5 shadow-lg px-7 flex-1 flex flex-col justify-between">
            <div>
              {" "}
              {/* Content container to push the button to the bottom */}
              <div className="flex items-end gap-3">
                <p className="text-4xl font-bold">89</p>
                <p className="text-gray-600 text-md">/month</p>
              </div>
              <p className="text-3xl font-bold pt-3">Enterprise Plan</p>
              <p className="py-3">
                For large businesses and enterprises with custom needs.
              </p>
              <hr />
              <div className="py-3 flex gap-2 items-center">
                <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                <p>Unlimited forms per month</p>
              </div>
              <div className="py-3 flex gap-2 items-center">
                <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                <p>Premium AI form suggestions</p>
              </div>
              <div className="py-3 flex gap-2 items-center">
                <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                <p>Advanced conditional logic and branching</p>
              </div>
              <div className="py-3 flex gap-2 items-center">
                <BadgeCheck fill="#a94cf7" className="h-5 w-5" />
                <p>API access for custom integrations</p>
              </div>
            </div>
            <Button className="bg-[#a94cf7] w-full hover:bg-purple-700 font-semibold mt-4 ">
              Select Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
