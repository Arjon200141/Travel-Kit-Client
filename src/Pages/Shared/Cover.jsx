const Cover = ({img , title , description}) => {
    return (
        <div>
            <div className="hero h-[550px]" style={{ backgroundImage: `url("${img}")`}}>
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content bg-black/35 text-center text-neutral-content">
                    <div className="w-[750px] px-16 py-6">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 text-lg">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;