import React, { useState } from "react";
import Banner from "../assets/main_Banner.png";
import "../Style/home.css";
import BalanceIcon from "@mui/icons-material/Balance";
import SearchIcon from "@mui/icons-material/Search";
import TimeToLeaveOutlinedIcon from "@mui/icons-material/TimeToLeaveOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import CarpenterOutlinedIcon from "@mui/icons-material/CarpenterOutlined";
import SanitizerOutlinedIcon from "@mui/icons-material/SanitizerOutlined";
import AnimationOutlinedIcon from "@mui/icons-material/AnimationOutlined";
import AccessibleForwardOutlinedIcon from "@mui/icons-material/AccessibleForwardOutlined";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
import Sofa from "../assets/sofa.png";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Groups2Icon from "@mui/icons-material/Groups2";
import Ikea from "../assets/ikea.png";
import Pista from "../assets/pista.png";
import Casa from "../assets/casa.png";
import Radiation from "../assets/radiation.png";
import Huwa from "../assets/huawei-logo-picture-4.png";
import Run from "../assets/running.png";
import Yem from "../assets/yemco.png";
import DiamondIcon from "@mui/icons-material/Diamond";

import Lacel from "../assets/lacelight.png";
import Laced from "../assets/lacedark.png";
import Sports from "../assets/sports.png";

import Back from "../assets/back.png";

import ManufactureCard from "./ManufactureCard";
import PopularCategoryCard from "./PopularCategoryCard";

// Import Swiper styles

const recentPurchasedManufactures = [
  {
    manufactureImage: Sofa,
    manufactureLogo: Ikea,
    manufactureCategory: "furniture & home appliance",
  },
  {
    manufactureImage: Pista,
    manufactureLogo: Casa,
    manufactureCategory: "Food & Perishables, Bakery",
  },
  {
    manufactureImage: Radiation,
    manufactureLogo: Huwa,
    manufactureCategory: "Electronics & Accessories, Mobile",
  },
  {
    manufactureImage: Run,
    manufactureLogo: Yem,
    manufactureCategory: "Sports, Fitness & Accessories, Ele..",
  },
];
const popularCategories = [
  {
    popularImage: Lacel,
  },
  {
    popularImage: Sports,
  },
  {
    popularImage: Laced,
  },
];

function Home() {
  const [name, setName] = useState("");
  const [backendData, setBackendData] = useState([]);
  const handleSubmit = async () => {
    // console.log(name);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(data);
    setBackendData(data);
  };

  async function onhandlechange(value) {
    // setName(value);
  }
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="box">
          <div className="contents">
            <div className="upper">
              <p>Explore products</p>
            </div>
            <div className="lower">
              <p>On the largest manufactures platform</p>
            </div>
          </div>
          <div className="searchbox">
            <form>
              <input type="text" placeholder="what you are looking for?" />
              <div className="singleline"></div>
              <button type="submit">
                <SearchIcon
                  style={{
                    color: "#EB5429",
                    paddingRight: "30px",
                    paddingLeft: "5px",
                  }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="pos">
        <div className="heading">
          <h1>Categories</h1>
        </div>
        <div className="categories">
          <div className="grid1">
            <TimeToLeaveOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Trasportation &<br></br>
              Machinery
            </p>
          </div>
          <div className="grid2">
            <ImportantDevicesOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Electronics &<br></br>
              Accessories
            </p>
          </div>

          <div className="grid3">
            <RamenDiningOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              food &<br></br>
              persishables
            </p>
          </div>
          <div className="grid4">
            <MedicalServicesOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Medical&<br></br>
              Pharmaceuticals
            </p>
          </div>

          <div className="grid5">
            <FitnessCenterOutlinedIcon style={{ color: "#EB5429" }} />{" "}
            <p>
              Sports,Fitness<br></br>& Accessories
            </p>
          </div>
          <div className="grid6">
            <LiquorOutlinedIcon style={{ color: "#EB5429" }} />
            <p>COnsumer Goods</p>
          </div>

          <div className="grid7">
            <CarpenterOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Building materials &<br></br>
              Accessories
            </p>
          </div>

          <div className="grid8">
            <SanitizerOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Beauty &<br></br>
              Personal Care
            </p>
          </div>

          <div className="grid9">
            <AnimationOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Jewelry &<br></br>
              Accessories
            </p>
          </div>
          <div className="grid10">
            <AccessibleForwardOutlinedIcon style={{ color: "#EB5429" }} />{" "}
            <p>
              Toys &<br></br>
              Hobbies
            </p>
          </div>

          <div className="grid11">
            <DryCleaningOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Fashion &<br></br>
              Appareals
            </p>
          </div>
          <div className="grid12">
            <ContentCutOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Craft &<br></br>
              Office Suppliers
            </p>
          </div>

          <div className="grid13">
            <LocalPrintshopOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Packaging &<br></br>
              Printing
            </p>
          </div>

          <div className="grid14">
            <DeckOutlinedIcon style={{ color: "#EB5429" }} />
            <p>
              Furniture &<br></br>
              Home Appliances
            </p>
          </div>
        </div>
      </div>

      <div className="main-purchase">
        <div className="purchases">
          <h1>Recent Purchased Manufacturers</h1>
          <div className="recentPurchasedManufatures">
            {recentPurchasedManufactures?.map((item, index) => (
              <ManufactureCard data={item} key={index} />
            ))}
          </div>
        </div>
        <div className="pop">
          <h1>Popular Categories</h1>
          <div className="popularCategories">
            {popularCategories?.map((item, index) => (
              <PopularCategoryCard
                pass={onhandlechange}
                data={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <button onClick={handleSubmit}>Clickme</button>

      <div className="backg" style={{ backgroundImage: `url(${Back})` }}>
        <div className="newbox">
          <form className="formbox">
            <p>
              GetPongo Holdings PTE LTD is a Singapore based holding corporation
              that is the developer and owner of the GetPongo platform. Our
              focus is bringing the latest in disruptive technologies in the
              development of our GetPongo platform and expanding its reach
              internationally.
            </p>
          </form>
        </div>
      </div>
      <div className="pongomain">
        <div className="welcomeContainer">
          <div className="pongo">
            <div className="welcome">
              <h6>WELCOME TO</h6>

              <h2>
                The World of <br></br>GetPongo Platform
              </h2>
            </div>
            <div className="para">
              <p>
                The world is becoming more digital and is ever changing…{" "}
                <br></br>
                We are confident that our development team will produce the most
                comprehensive, <br></br>complete, and advanced solution in the
                market today.
              </p>
              <p>
                To develop the GetPongo platform to be an international
                manufacturer-based platform that<br></br> will allow
                manufacturers to showcase their products with all the technical
                information and
                <br></br> specifications required for international buyers.
              </p>
            </div>
          </div>
        </div>
        <div className="corehead">
          <div className="valuehead">
            <h1>Core Values</h1>
          </div>
          <div className="core1">
            <BalanceIcon style={{ color: "#EB5429" }} />
            <h3>Integrity</h3>
            <p>Do what we say. Every time.</p>
          </div>
          <div className="core2">
            <DiamondIcon style={{ color: "#EB5429" }} />
            <h3>Quality</h3>
            <p>Never sacrifice standards for profit.</p>
          </div>
          <div className="core3">
            <Groups2Icon style={{ color: "#EB5429" }} />
            <h3>Teamwork</h3>
            <p>Find Win/Win with clients and suppliers.</p>
          </div>
          <div className="core4">
            <AcUnitIcon style={{ color: "#EB5429" }} />
            <h3>Accountability</h3>
            <p>We are dependable; you can count on us.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
