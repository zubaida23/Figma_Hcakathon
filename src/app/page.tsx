import Hero from "@/components/Hero";
import Arrivals from "@/components/Arrivals";
import Selling from "@/components/Selling";
import Dress from "@/components/Dress";
import Customer from "@/components/Customer";
import Sidebar from "@/components/Sidebar";
import Tshirt from "@/components/Tshirt";
import Reviwe from "@/components/Rewive";
import Like from "@/components/Like";
export default function Home() {
  return (
    <div>
      <>
        <Hero />
        <Arrivals />
        <Selling />
        <Dress />
        <Customer />
        <Sidebar />
        <Tshirt />
        <Reviwe />
        <Like />
      </>
    </div>
  );
}
