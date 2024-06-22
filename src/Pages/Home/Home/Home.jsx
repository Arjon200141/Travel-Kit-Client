import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularProducts from "../PopularProducts/PopularProducts";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularProducts></PopularProducts>
            <Testimonials></Testimonials>
            <h2>Home</h2>
        </div>
    );
};

export default Home;