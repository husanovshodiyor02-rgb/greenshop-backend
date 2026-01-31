
import Header from "../../components/header/Header";
import Footer1 from "../../components/footer/Footer1";

import Summer from "./Summer"
import Blog1 from "./Blog1";
import Dashboard from "../../components/dashboard";
import Hero from "../../components/hero";
import Garden from "./Garden";


const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className="">
        <Dashboard/>
      </div>
      <Summer/>
      <Blog1/>
      <Garden/>
      <Footer1/>
    </div>
  )
}

export default Home