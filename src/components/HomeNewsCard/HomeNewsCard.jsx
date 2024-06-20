const HomeNewsCard = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="new-card">
                    <div className="top">
                        <div className="left">
                            <img src="https://picsum.photos/248/128" alt="rams" />
                        </div>
                        <div className="right">
                            <div className="head">
                                <p className="media">MEDIA</p>
                                <p className="date">August 10, 2023</p>
                            </div>
                            <p className="text">
                                BEST BASKETBALL NEWS IN OUR WEEKLY SPORTS DIGEST
                            </p>
                        </div>
                    </div>
                    <button className="bottom_btn">BATAFSIL</button>
                </div>
            </div>
        </>
    )
}

export default HomeNewsCard