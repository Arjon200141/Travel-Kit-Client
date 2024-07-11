import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Discount from "../Discount/Discount";
import PopularProducts from "../PopularProducts/PopularProducts";
import Testimonials from "../Testimonials/Testimonials";
import Upcoming from "../Upcoming/Upcoming";

const Home = () => {
    return (
        <div className="mx-0 px-0 max-w-full">
            <Banner></Banner>
            <Discount></Discount>
            <Category></Category>
            <PopularProducts></PopularProducts>
            <Upcoming></Upcoming>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;