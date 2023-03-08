function Nftcard({n, setOpenModal}) {
  return (
    <div key={n.id} onClick={(e) => setOpenModal(n.id)}>
      <img src={n.image} alt=""/>
      <div className="flex justify-between py-3 items-center">
        <h1 className="text-white text-lg font-bold">{n.name}</h1>
        <small className="text-white">#{n.tag || ''}</small>
      </div>
      <div
        className="py-4 px-0 max-w-sm bg-transparent flex justify-between">
        <div className="flex justify-between">
          <img className="block mx-auto h-10 rounded-full sm:mx-0 sm:shrink-0"
               src={n.seller.image} alt="Woman's Face" />
          <div className="text-center sm:text-left pl-4">
            <div className="space-y-0.5">
              <p className="text-slate-500 font-medium text-sm">
                Sold by
              </p>
              <p className="text-base text-white font-semibold">
                {n.seller.name}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-0.5">
            <p className="text-slate-500 font-medium text-sm">
              Current bid
            </p>
            <p className="text-base text-white font-semibold">
              {n.bidding.currentBid || 'no bid price'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nftcard