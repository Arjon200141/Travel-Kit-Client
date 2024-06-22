import { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Cover from "../../Cover";
import Card from "../Card/Card";
import Marquee from "react-fast-marquee";

const Shop = () => {
    const products = useLoaderData();

    const [showAllBags, setShowAllBags] = useState(false);
    const [showAllCaps, setShowAllCaps] = useState(false);
    const [showAllBottles, setShowAllBottles] = useState(false);
    const [showAllEarbuds, setShowAllEarbuds] = useState(false);
    const [showAllPants, setShowAllPants] = useState(false);
    const [showAllShoes, setShowAllShoes] = useState(false);
    const [showAllTShirts, setShowAllTShirts] = useState(false);

    const bags = products.filter(item => item.category === 'Bags');
    const caps = products.filter(item => item.category === 'Caps');
    const bottles = products.filter(item => item.category === 'Bottles');
    const earbuds = products.filter(item => item.category === 'Earbuds');
    const pants = products.filter(item => item.category === 'Pants');
    const shoes = products.filter(item => item.category === 'Shoes');
    const tShirts = products.filter(item => item.category === 'TShirt');

    return (
        <div className="">
            <Cover
                img="https://i.ibb.co/tJ9pbbw/top-view-travel-tourism-concept-background-91128-185.jpg"
                title="Our Shop"
                description="Would you like buy something?? You are at the right place.Explore Here and Grab what you need..."
            ></Cover>

            <Marquee className="mt-10 text-2xl">
                Discover your perfect style at TrendGear! Shop the latest shoes, bags, caps, bottles, pants, T-shirts, and earbuds for travelling with unbeatable deals and fast shipping! 
            </Marquee>

            <div className='flex justify-center my-16'>
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
                    (showAllBags ? bags : bags.slice(0, 6)).map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
            <div className="text-center mb-12">
                <button 
                    onClick={() => setShowAllBags(!showAllBags)} 
                    className="px-10 py-2 bg-blue-400 font-semibold text-white text-2xl rounded">
                    {showAllBags ? 'Show Less' : 'Show All'}
                </button>
            </div>

            {/* Bottles */}
            <div className="mx-12">
                <Cover
                    img="https://i.ibb.co/4fVtv2k/portable-water-purifier-hiking-camping-trips-974629-217506.jpg"
                    title="Our Bottles"
                    description="Want to buy Bottles?Explore Here"
                ></Cover>
            </div>
            <div className="grid grid-cols-3 gap-5 my-24 mx-12">
                {
                    (showAllBottles ? bottles : bottles.slice(0, 6)).map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
            <div className="text-center mb-12">
                <button 
                    onClick={() => setShowAllBottles(!showAllBottles)} 
                    className="px-10 py-2 bg-blue-400 font-semibold text-white text-2xl rounded">
                    {showAllBottles ? 'Show Less' : 'Show All'}
                </button>
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
                    (showAllShoes ? shoes : shoes.slice(0, 6)).map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
            <div className="text-center mb-12">
                <button 
                    onClick={() => setShowAllShoes(!showAllShoes)} 
                    className="px-10 py-2 bg-blue-400 font-semibold text-white text-2xl rounded">
                    {showAllShoes ? 'Show Less' : 'Show All'}
                </button>
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
                    (showAllEarbuds ? earbuds : earbuds.slice(0, 6)).map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
            <div className="text-center mb-12">
                <button 
                    onClick={() => setShowAllEarbuds(!showAllEarbuds)} 
                    className="px-10 py-2 bg-blue-400 font-semibold text-white text-2xl rounded">
                    {showAllEarbuds ? 'Show Less' : 'Show All'}
                </button>
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
                    (showAllPants ? pants : pants.slice(0, 6)).map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
            <div className="text-center mb-12">
                <button 
                    onClick={() => setShowAllPants(!showAllPants)} 
                    className="px-10 py-2 bg-blue-400 font-semibold text-white text-2xl rounded">
                    {showAllPants ? 'Show Less' : 'Show All'}
                </button>
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
                    (showAllTShirts ? tShirts : tShirts.slice(0, 6)).map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
            <div className="text-center mb-12">
                <button 
                    onClick={() => setShowAllTShirts(!showAllTShirts)} 
                    className="px-10 py-2 bg-blue-400 font-semibold text-white text-2xl rounded">
                    {showAllTShirts ? 'Show Less' : 'Show All'}
                </button>
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
                    (showAllCaps ? caps : caps.slice(0, 6)).map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
            <div className="text-center mb-12">
                <button 
                    onClick={() => setShowAllCaps(!showAllCaps)} 
                    className="px-10 py-2 bg-blue-400 font-semibold text-white text-2xl rounded">
                    {showAllCaps ? 'Show Less' : 'Show All'}
                </button>
            </div>
        </div>
    );
};

export default Shop;
