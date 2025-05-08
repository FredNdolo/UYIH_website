// File: src/pages/Programs.jsx
import React from 'react';

export default function Programs() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold">Our Programs</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Youth Training</h3>
          <img
            src="https://images.unsplash.com/photo-1596495578065-9c7d49a75b39"
            alt="Youth Training"
            className="rounded shadow mb-2"
          />
          <p className="text-gray-700">Workshops, leadership development, and practical skills for youth.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">ICT & Skills Empowerment</h3>
          <img
            src="https://images.unsplash.com/photo-1555431189-0fabf0f3d874"
            alt="ICT Empowerment"
            className="rounded shadow mb-2"
          />
          <p className="text-gray-700">Digital literacy and technical training to enhance youth employability.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Gender Equality</h3>
          <img
            src="https://images.unsplash.com/photo-1520975922030-229d3c14f14e"
            alt="Gender Equality"
            className="rounded shadow mb-2"
          />
          <p className="text-gray-700">Promoting equal opportunities and empowering women and girls.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Community Events</h3>
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
            alt="Community Events"
            className="rounded shadow mb-2"
          />
          <p className="text-gray-700">Organizing events to connect, inspire, and create positive change.</p>
        </div>
      </div>
    </div>
  );
}