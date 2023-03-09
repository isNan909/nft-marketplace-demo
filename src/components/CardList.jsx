import Nftcard from './Nftcard';

function CardList({nft, setOpenModal}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 py-2.5">
      {nft?.nfts.map(n => <div className="cursor-pointer hover:opacity-90 p-3 bg-[#24303A] rounded">
        <Nftcard key={n.id} n={n} setOpenModal={setOpenModal}/>
      </div>)}
    </div>
  )
}

export default CardList
