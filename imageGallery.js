
/*npm create-react-app image-gallery
cd image-gallery
mpm start*/

import React, from "react";

const images= [
  "https://images.unaplash.com/photo-1506744036-46273834b3fb",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1535930749574-1399327ce78f",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24",
  "https://images.unsplash.com/photo-1504203700686-0b3c281a2b9a",
  ];

function App() {
  return(
    <div style={styles.container}>
<h1 style={styles.title} 🖼️ Image Gallery</h1>
  <div style={styles.gallery}>
  {images.map((img, index) => (
    <div key={index} style={styles.card}>
    <img src={img} alt={`Gallery $ {index}`}style={styles.image}/>
  </div>
))}
  </div>
  </div>
);
}

const styles={
  container: {
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    padding: "10px",
  },
  card: {
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  image: {
    width: "100%",
    
