import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularProducts from "../PopularProducts/PopularProducts";
import Testimonials from "../Testimonials/Testimonials";
import Upcoming from "../Upcoming/Upcoming";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularProducts></PopularProducts>
            <Upcoming></Upcoming>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;