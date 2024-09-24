import React from 'react';
import people1 from "../Assets/people1.jpg" ;
import people2 from "../Assets/people2.jpg" ;
import people3 from "../Assets/people3.jpg" ;

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: people1,
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: people2,
  },
  {
    name: "Sarah Johnson",
    role: "UX Designer",
    image: people3,
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-gray-300 py-12 mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:bg-blue-100 transition duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
