import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/5_DesktopHero_Unrec_150x600-._CB419216629_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="1"
            title="Lean Startup: Adoptez l'innovation continue Audible Logo Audible Audiobook – Unabridged"
            price={29.99}
            image={"https://m.media-amazon.com/images/I/51vu3J6ojPL.jpg"}
            rating={5}
          />
          <Product
            id="2"
            title="AmazonBasics 6 kg Fully-Automatic Front Load Washing Machine (Grey/Silver, In-built Heater, Self cleaning technology"
            price={150}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81X52AI2ovL._SL1500_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/256GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FC+Webcam"
            price={700}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71mYRzElTAL._SL1500_.jpg"
            }
            rating={4}
          />
          <Product
            id="4"
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black"
            price={320}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._SL1500_.jpg"
            }
            rating={3}
          />
          <Product
            id="5"
            title="Amazon Echo (2nd Gen), Certified Refurbished, Grey – Smart speaker with Alexa – Like new, backed with 1-year warranty"
            price={80}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61lVYc7V64L._SL1000_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Usha Janome Dream Stitch Automatic Zig-Zag Electric Sewing Machine (White and Blue) with Free Sewing KIT Worth RS 500"
            price={110}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/513IOlGwNiL._SL1000_.jpg"
            }
            rating={5}
          />{" "}
          <Product
            id="7"
            title="2FONZ Ultimate Kitchen Set Bring Along 26 peices Cooking Suitcase for Girls- Multicolor"
            price={8}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/612HRxLFwDL._SL1024_.jpg"
            }
            rating={4}
          />{" "}
          <Product
            id="8"
            title="Ant Esports ICE-130AG Mid Tower Computer Case I Gaming Cabinet Supports ATX, Micro-ATX, Mini-ITX Motherboard with Transparent Side Panel 1 x 120 mm Rear Fan."
            price={45}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61GodxYLinL._SL1080_.jpg"
            }
            rating={4}
          />{" "}
          <Product
            id="9"
            title="LG 22 inch (55cm) IPS Monitor - Full HD, IPS Panel with VGA, HDMI, DVI, Audio Out Ports - 22MP68VQ"
            price={108}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61wFnp19zzL._SL1092_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
