import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import OrderSummary from "./components/OrderSummary";

export default function Home() {

    return (
        <>
            <div className="mx-12 my-8">
                <OrderSummary />
            </div>
        </>
    );
}