import React from "react";
import { teamMembers } from "../constants/Config";

const Team = () => {
  return (
    <section className="py-16 bg-white px-10 md:px-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Company Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="rounded-lg w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-400 font-normal text-sm">{member.role}</p>
              <div className="h-1 w-16 rounded-lg bg-indigo-600 mt-4"></div>
              <p className="text-gray-600 md:px-8 px-2 mt-2 md:text-justify text-center">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
