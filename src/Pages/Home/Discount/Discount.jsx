import Marquee from "react-fast-marquee";

const Discount = () => {
    return (
        <div>
            <Marquee speed={150}>
                <div className="my-20 mx-20 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400">
                    <div>
                        <div className="h-56  flex  bg-white/35 rounded-xl shadow-xl">
                            <img src="https://i.ibb.co/vVmQMjZ/download.png" alt="" className="h-56 w-60 ml-8" />
                            <div>
                                <h2 className="text-xl mt-14 ga-maamli-regular"><span className="font-semibold text-2xl">Save $20 on Orders Over $150 </span> <br />
                                    Apply the voucher code "discount20" at checkout and <br />enjoy a $20 discount on your total purchase amount.</h2>
                            </div>
                            <img src="https://i.ibb.co/TLdtFrv/bag.png" alt="" className="h-56 w-64" />
                        </div>
                    </div>
                </div>
            </Marquee>

        </div>

    );
};

export default Discount;