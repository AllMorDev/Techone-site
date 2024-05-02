import BannerHome from "./Components/Banner/Banner";
import QuemSomos from "./Components/QuemSomos/QuemSomos";
import Portfolio from "./Components/Portfolio/Portfolio";
import Marcas from "./Components/Marcas/Marcas";



export default function Home() {
    return (
        <>  
            <BannerHome/>
            <QuemSomos/>
            <Marcas/>
            <Portfolio/>
        </>
    )
}