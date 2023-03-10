function Hero () {
  return(
      <section className="text-white container mx-auto">
        <div
          className="mx-auto px-4 py-10 lg:flex lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-fuchsia-400 via-fuchsia-200 to-sky-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Discover curated sleek NFTs
            </h1>

            <p className="mx-auto mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              You can find rare digital art and collect extraordinary NFT’s in our open marketplace.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="shadow-xl shadow-black text-white font-bold bg-indigo-500 hover:bg-indigo-600 text-lg py-4 px-8 rounded-full cursor-pointer"
                href="/"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}
export default Hero