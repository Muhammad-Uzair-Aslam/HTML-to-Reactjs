import "./App.css";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/button/Button";
import imageBaseImg from "./assets/Imgs/Image Base.png";
import pakistanImg from "./assets/Imgs/pakistan.png";
import Icon1Img from "./assets/Imgs/Icon (1).png";
import Dishes from "./components/dishes/Dishes";
import foodphotoImg from "./assets/Imgs/Food Photo.png";
import foodphotoImg9 from "./assets/Imgs/Food Photo (9).png";
import foodphotoImg10 from "./assets/Imgs/Food Photo (10).png";
import foodphotoImg11 from "./assets/Imgs/Food Photo (11).png";
import HowDoesItWorks from "./components/howDoesItWorks/HowDoesItWorks";
import iconImg from "./assets/Imgs/Icon.png";
import iconImg1 from "./assets/Imgs/Icons (1).png";
import iconImg2 from "./assets/Imgs/Icons (2).png";
import iconImg3 from "./assets/Imgs/Icons (3).png";
import PopularItems from "./components/popularItems/PopularItems";
import rectangleImg1 from "./assets/Imgs/Rectangle 336 (1).png";
import rectangleImg2 from "./assets/Imgs/Rectangle 336 (2).png";
import rectangleImg3 from "./assets/Imgs/Rectangle 336 (3).png";
import rectangleImg4 from "./assets/Imgs/Rectangle 336 (4).png";
import rectangleImg5 from "./assets/Imgs/Rectangle 336 (5).png";
import FeatureRestaurant from "./components/featureRestaurant/FeatureRestaurant";
import foodPhoto1 from './assets/Imgs/Food Photo (1).png';
import foodPhoto2 from './assets/Imgs/Food Photo (2).png';
import foodPhoto3 from './assets/Imgs/Food Photo (3).png';
import foodPhoto4 from './assets/Imgs/Food Photo (4).png';
import foodPhoto5 from './assets/Imgs/Food Photo (5).png';
import foodPhoto6 from './assets/Imgs/Food Photo (6).png';
import foodPhoto7 from './assets/Imgs/Food Photo (7).png';
import foodPhoto8 from './assets/Imgs/Food Photo (8).png';
import img1 from './assets/Imgs/Image (1).png';
import img2 from './assets/Imgs/Image (2).png';
import img3 from './assets/Imgs/Image (3).png';
import img4 from './assets/Imgs/Image (4).png';
import img5 from './assets/Imgs/Image (5).png';
import img6 from './assets/Imgs/Image (6).png';
import img7 from './assets/Imgs/Image (7).png';
import img8 from './assets/Imgs/Image (8).png';
function App() {
  return (
    <div>
      <Header />

      <div className="bg-warning mt-2 w-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 mt-5">
              <h1 className="display-4 fw-bold text-light">
                Are you Starving?
              </h1>
              <p>
                within a few clicks, find meals that are accessible near you
              </p>
              <div className="bg-light w-100 rounded-2">
                <Button
                  title="Delivery"
                  Img={pakistanImg}
                  bordercolor="red"
                  fontweight="bolder"
                  color="red"
                />
                <Button
                  title="Pickup"
                  Img={Icon1Img}
                  bordercolor="gray"
                  fontweight="bolder"
                  color="gray"
                />
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="m-3 "
                />
                <button className="btn btn-danger btn-lg">
                  <img src={pakistanImg} alt="" /> Find Food
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 mt-5 text-center mb-5">
              <img src={imageBaseImg} className="  " alt="" width="350px" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <Dishes src={foodphotoImg} days="7" />
          <Dishes src={foodphotoImg9} days="6" />
          <Dishes src={foodphotoImg10} days="8" />
          <Dishes src={foodphotoImg11} days="9" />
        </div>
      </div>
      <div className="background mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5 text-danger text-center h3">
              How does it work
            </div>
          </div>
          <div className="row">
            <HowDoesItWorks
              heading="Select Location"
              desc="Choose the location where your food will be delivered"
              src={iconImg}
            />
            <HowDoesItWorks
              heading="Select Order"
              desc="Check over hundreds of menus to pick your favorite food."
              src={iconImg1}
            />
            <HowDoesItWorks
              heading="Pay Advanced"
              desc="It's quick, safe and simple.Select several methods of payment."
              src={iconImg2}
            />
            <HowDoesItWorks
              heading="Enjoy Meal"
              desc="Food is made and delivered directly to your home."
              src={iconImg3}
            />
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 text-center h2 mt-5">Popular Items</div>
            <div class="col-1  d-flex align-items-center justify-content-end">
              <h1 class=" ">
                <i class="bi bi-arrow-left-circle-fill icon-arrow"></i>
              </h1></div>
              <PopularItems
                src={rectangleImg1}
                name="Cheese Burger"
                desc="Burger Arina"
                rating="$38.88"
              />
              <PopularItems
                src={rectangleImg2}
                name="Toffee Cakes"
                desc="Top Sticks"
                rating="$12.88"
              />
              <PopularItems
                src={rectangleImg3}
                name="DenCake"
                desc="Cake World"
                rating="$10.88"
              />
              <PopularItems
                src={rectangleImg4}
                name="Crispy Sandwich"
                desc="FastFood Dine"
                rating="$3.44"
              />
              <PopularItems
                src={rectangleImg5}
                name="Thai Soup"
                desc="Foody Man"
                rating="$8.88"
              />
            </div>
          </div>
        </div>
        <div className="container mt-5">
        <div className="row">
            <div className="col-12 text-center fw-bold h1">
                Featured Restaurants

            </div>
        </div>
        <div class="row mt-4">
          <FeatureRestaurant src1={foodPhoto1} src2={img1}  button="Open Tomorrow" name="Food World" number="45" color="#f17228" bg="rgba(241, 114, 40, 0.2)"/>
          <FeatureRestaurant src1={foodPhoto2} src2={img2}  button="Open Tomorrow" name="Donut Huts" number="100" color="#f17228" bg="rgba(241, 114, 40, 0.2)"/>
          <FeatureRestaurant src1={foodPhoto3} src2={img3}  button="Open now" name="Donut Huts" number="25" color="#79B93C" bg="rgba(121, 185, 60, 0.2)"/>
          <FeatureRestaurant src1={foodPhoto4} src2={img4}  button="Open now" name="Donut Huts" number="15" color="#79B93C" bg="rgba(121, 185, 60, 0.2)"/>
        </div>
        <div class="row mt-4">
        <FeatureRestaurant src1={foodPhoto5} src2={img5}  button="Open now" name="Rubby Tuesday" number="75" color="#79B93C" bg="rgba(121, 185, 60, 0.2)"/>
          <FeatureRestaurant src1={foodPhoto6} src2={img6}  button="Open now" name="Kukta fried ckn" number="100" color="#79B93C" bg="rgba(121, 185, 60, 0.2)"/>
          <FeatureRestaurant src1={foodPhoto7} src2={img7}  button="Open now" name="Red Square" number="10" color="#79B93C" bg="rgba(121, 185, 60, 0.2)"/>
          <FeatureRestaurant src1={foodPhoto8} src2={img8}  button="Open now" name="Taco Bell" number="170" color="#79B93C" bg="rgba(121, 185, 60, 0.2)"/>
        </div>
        </div>
        
      </div>
  );
}

export default App;
