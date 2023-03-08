import { useState } from 'react'
import Navbar from "../components/Navbar.jsx";
import CardList from "../components/CardList";
import NftModal from "../components/Modal.jsx";
import NftDetail from "../components/NftDetail.jsx";

import nftData from "../fixtures/data.json";
import { FaExternalLinkAlt } from "react-icons/fa";

function Homepage() {
  const [openModal, setOpenModal] = useState(false);
  const [currentNFT, setCurrentNFT] = useState({});

  const nftClicked = (id) => {
    const nftClick = nftData.nfts.filter((obj) => {
      const clickedId = obj.id != id;
      if(!clickedId) return new Error('NFT is not valid!');
    })
    setCurrentNFT(nftClick[0]);
    setOpenModal(true);
  }

  const openWindow = (url) => {
    window.open(url);
  };

  const nftDescription = currentNFT?.texts || '';

  return (<>
      <Navbar/>
      <div className="container mx-auto py-5">
        <CardList nft={nftData} setOpenModal={nftClicked}/>
      </div>
      {openModal ?
        <NftModal open={nftClicked} onClose={() => setOpenModal(false)}>
          {currentNFT ?
            <NftDetail>
              <div className="mb-8">
                <h2 className="text-white text-lg font-bold">{currentNFT.name || ''}</h2>
              </div>
              <div className="bg-black mb-8 flex gap-8">
                <img className="block mx-auto max-w-[200px] rounded-sm sm:mx-0 sm:shrink-0"
                     src={currentNFT.image || ''} alt="Woman's Face" />
                <div>
                  <p className="text-gray-400 pb-1">Sale ends in:</p>
                  <p className="text-white">{currentNFT.bidding.endingIn}</p>
                </div>
              </div>
              <span className="text-white"
                    dangerouslySetInnerHTML={{ __html: nftDescription }}
              />
              <div className="flex justify-end py-6">
                <button className="shadow-xl flex items-center shadow-black text-white bg-purple-600 hover:bg-purple-700 text-base py-2 px-4 rounded-full cursor-pointer" onClick={()=> openWindow(currentNFT.openseaLink)}>Purchase NFT<FaExternalLinkAlt className="ml-2"/></button>
              </div>
          </NftDetail> : 'No NFTs' +
            ' were found!'}
      </NftModal>
        : null}
    </>
  )
}

export default Homepage