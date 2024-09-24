import React from 'react';
import gallery1 from "../Assets/gallery1.jpg" ; 
import gallery2 from "../Assets/gallery2.jpg" ; 
import gallery3 from "../Assets/gallery3.jpg" ; 
import gallery4 from "../Assets/gallery4.jpg" ; 
import gallery5 from "../Assets/gallery5.jpg" ; 
import gallery6 from "../Assets/gallery6.jpg" ; 
import gallery7 from "../Assets/gallery7.jpg" ; 
import gallery8 from "../Assets/gallery8.jpg" ; 
import gallery9 from "../Assets/gallery9.jpg" ; 

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="h-[300px] w-[500px] rounded-lg shadow-lg hover:scale-105 transition duration-300"
              />
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 flex items-center justify-center text-white text-lg font-bold">
                View Image
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
