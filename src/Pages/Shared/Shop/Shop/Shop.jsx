import { useLoaderData } from "react-router-dom";
import Cover from "../../Cover";
import Card from "../Card/Card";

const Shop = () => {
    const products = useLoaderData();
    const bags = products.filter(item => item.category === 'Bags')
    const caps = products.filter(item => item.category === 'Caps')
    const bottles = products.filter(item => item.category === 'Bottles')
    const earbuds = products.filter(item => item.category === 'Earbuds')
    const pants = products.filter(item => item.category === 'Pants')
    const shoes = products.filter(item => item.category === 'Shoes')
    const tShirt = products.filter(item => item.category === 'TShirt')
    return (
        <div className="">
            <Cover
                img="https://i.ibb.co/tJ9pbbw/top-view-travel-tourism-concept-background-91128-185.jpg"
                title="Our Shop"
                description="Would you like buy something?? You are at the right place.Explore Here and Grab what you need..."
            ></Cover>

            <div className='flex justify-center my-20'>
                <h2 className='w-96 border-y-4 border-gray-600 text-center py-3 text-4xl font-semibold'>Explore Our Products</h2>
            </div>

            {/* BAGS */}
            <div className="mx-12">
                <Cover
                    img="https://i.ibb.co/jgM71rn/traveler-equipment-wooden-table-97716-334.jpg"
                    title="Our Bags"
                    description="Want to buy Travel Bags?Explore Here"
                ></Cover>
            </div>
            <div className="grid grid-cols-3 gap-5 my-24 mx-12">
                {
                    bags.map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>

            {/* Bottles */}

            <div className="mx-12">
                <Cover
                    img="https://i.ibb.co/4fVtv2k/portable-water-purifier-hiking-camping-trips-974629-217506.jpg"
                    title="Our Bottles"
                    description="Want to buy Boottles?Explore Here"
                ></Cover>
            </div>
            <div className="grid grid-cols-3 gap-5 my-24 mx-12">
                {
                    bottles.map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>

            {/* Shoes */}
            <div className="mx-12">
                <Cover
                    img="https://i.ibb.co/LQjFn22/close-up-canvas-shoes-outdoors-summer-1048944-29296746.jpg"
                    title="Our Shoes"
                    description="Want to buy Travel Shoes? Explore Here"
                ></Cover>
            </div>
            <div className="grid grid-cols-3 gap-5 my-24 mx-12">
                {
                    shoes.map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>

            {/* Earbuds */}
            <div className="mx-12">
                <Cover
                    img="https://i.ibb.co/mDm7gPS/travel-summer-accessories-blue-wood-1249-588.jpg"
                    title="Our Earbuds"
                    description="Want to buy Earbuds?Explore Here"
                ></Cover>
            </div>
            <div className="grid grid-cols-3 gap-5 my-24 mx-12">
                {
                    earbuds.map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>

            {/* Pants */}
            <div className="mx-12">
                <Cover
                    img="https://i.ibb.co/Z1VnCND/girls-wearing-sports-track-pants-raw-style-1077802-126574.jpg"
                    title="Our Pants"
                    description="Want to buy Pants?Explore Here"
                ></Cover>
            </div>
            <div className="grid grid-cols-3 gap-5 my-24 mx-12">
                {
                    pants.map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>

            {/* T-Shirt */}
            <div className="mx-12">
                <Cover
                    img="https://i.ibb.co/L1m1wMK/free-vector-adventure-travel-lettering-t-shirt-design-travel-t-shirt-design-718526-111.jpg"
                    title="Our T-Shirts"
                    description="Want to buy T-Shirts ?Explore Here"
                ></Cover>
            </div>
            <div className="grid grid-cols-3 gap-5 my-24 mx-12">
                {
                    tShirt.map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>

            {/* Caps */}
            <div className="mx-12">
                <Cover
                    img="https://i.ibb.co/gmDxx6H/top-view-travel-essentials-with-copy-space-23-2148434408.jpg"
                    title="Our Caps"
                    description="Want to buy Caps?Explore Here"
                ></Cover>
            </div>
            <div className="grid grid-cols-3 gap-5 my-24 mx-12">
                {
                    caps.map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default Shop;