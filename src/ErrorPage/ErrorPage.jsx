import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-sky-100">
            <section className="flex items-center min-h-screen dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-4">
                    <div className="text-center">
                        <div className="w-full h-1/4">
                            <img src="https://i.ibb.co/VWrscPc/error.jpg" alt="" className="h-[380px] w-[1000px]"/>
                        </div>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link><a rel="noopener noreferrer" href="#" className="px-8 py-3 text-2xl font-semibold rounded-lg text-black border-2 bg-sky-300">Back to homepage</a></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;
