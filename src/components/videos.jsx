import  '../styles/videos.css'
import { useState } from "react";

const Videos = () => {
    let[video,setVideo]=useState([
        {
        thumbnail:"https://i.ytimg.com/vi/Jh72phku9Zg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBgRtp3DVE5FENsTtWsTVgVEltoaQ ",
        titel:"Rise of Taliban | Afghanistan Crisis Continued | US Troops Return ",
        channel:"Dhruv Rathee",
        views:"7.8M views",
        id:1

        },
         {
        thumbnail:" 	https://i.ytimg.com/vi/XDDKb4Xl2Es/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBSGfBGSRcR6wuOfUDgml97E4PPXA",
        titel:"किसने उड़ाई पहलवानों के आंदोलन के खात्मे की अफवाह?साक्षी-विनेश",
        channel:"Abhisar Sharma",
        views:"72k",
        id:2
        },
        {
            thumbnail:"https://i.ytimg.com/vi/EpJmECjKKoM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBexsjnlCl8fFX6IN68wHxHhICH1Q",
            titel:"The Family Man - Savage Moments | Srikant Tiwari | Prime Video India by Prime Video India",
            channel:"Prime Video India	",
            views:"3.8M views",
            id:3
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/V5pRSqkiSVI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAv7o1MqXstUAhIcJlpuC3-z6tbLg",
            titel:"Gobble | Travel Series | Bazaar Travels | S01E02: Kolkata | Ft. Barkha Singh by Gobble",
            channel:"Gobble",
            views:"2.9M views",
            id:4
        },
        {
            thumbnail:"https://i.ytimg.com/vi/dTSbcI44QkA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBOJrVLxtDCyTHtnm8p_Dq94_E2Vw",
            titel:"SK Sir Ki Class | EP1 - Chakravyuh | Watch in Hindi, Tamil or Telugu | TVF by The Viral Fever ",
            channel:"The Viral Fever ",
            views:"11   M views",
            id:5
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/FKVf1E78Wb8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAnL86pocFHPIewQ8G73fFIWyil7g",
            titel:"How to make Notes for Coding? Data Structures & Algorithms",
            channel:"Apna College",
            views:"846k",
            id:6
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/tYY4WnfEEkY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA51EoNXrPYj1GGVdd4bmQOlx5ofg",
            titel:"KOLKATA : THE THIRD EYE |  Drone documentary | 4K",
            channel:"Tridip The Shutterbug ",
            views:"1.1M views",
            id:7
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/a18py61_F_w/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAPOXA190Tn2tMwhT-_DZ7W2E-u1g",
            titel:"Mix - Coke Studio Season 8| Tajdar-e-Haram| Atif Aslam",
            channel:"Coke Studio ",
            views:"481M views",
            id:8
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/ZPAoSIlU8ug/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCXOunh3s6Ug0P9hWUtZ0W-V9UsrQ ",
            titel:"Wildest Hunter - हिन्दी डॉक्यूमेंट्री | Wildlife documentary in Hindi",
            channel:"Wildlife Telecast",
            views:"3.8M views",
            id:9
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/wjc97zpkBO4/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLA9DdDV9m_TI154RG8IC8XDdB07PA	 ",
            titel:"MAJESTIC ANIMALS 8K VIDEO ULTRA HD by",
            channel:"8K VIDEOS HDR",
            views:"111k views",
            id:10
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/ESnrn1kAD4E/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCM4TFslI3SlIi1HgliT3Rcy6cT1w ",
            titel:"CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code",
            channel:"Apna College",
            views:"108k views",
            id:11
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/ChiLWi-mBvU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBpX2P8Jj3srK0ai3XILvn7W87q9w",
            titel:"FULL MATCH - John Cena & The Rock vs. The Miz & R-Truth: Survivor Series 2011 ",
            channel:"WWE",
            views:"183M views",
            id:12
        },
     
            

        
    ])
    let  removeVideo=(id,name)=>{
        let result=video.filter((x)=> x.id!==id)
        setVideo(result)
        alert(`${name} video got remove`)

    }
    

    let [short,setShort]=useState([
        {
            thumbnail:"	https://i.ytimg.com/vi/WWItlR4o1Xg/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLAIn2-Fz6becSejYBBi_kCGK6KMhg",
            titel:"THALAPATHY 67 | #shorts #viralshorts #trendingshorts #thalapathy #rolex #vikram #dilli #leo #kaithi ",
            channel:"Movie Indian",
            views:"2.2M views"
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/IqlPtHvcUK4/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLC3sQZ9KZrhCTxiOgPbTHnCvXIbRA",
            titel:"Jhoom | Coming Soon Promo 1 | Geo Entertainment |",
            channel:"@HarPalGeoOfficial",
            views:"1.6M views"
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/_Fmn5d_6b78/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLCmddFMRyDpVIgnIWsHahCQ8TnP-g",
            titel:"Tiger Kabir Pathan | YRF | Spy Universe | Akxedits1 #shortvideo #viral",
            channel:"@akxedits1",
            views:"7.8M views"
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/Rx59jb-M2wE/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLAKZQeKwM6owJS1cwYBRxlt2UVNxQ",
            titel:"Trisha Krishnan's latest candid video 😍❤️ | Exclusive 🤩",
            channel:"@Sr_Status_Creation002",
            views:"2.9M views"
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/If3nU06DK64/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLD9yJtRg-xEUiiwCDQHSiKbniuvZw",
            titel:"LEH LADAKH BIKE TRIP 2023 Status Video #shorts #status #ladakh",
            channel:"@Sr_Status_Creation002",
            views:"1.5M views"
        },
        {
            thumbnail:"https://i.ytimg.com/vi/o8rBhI3aPyg/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLBt-1OvawNEaB6J2T8tra-nFOx8fA",
            titel:"Kaithi X Rolex - Full HD Edit | Karthi | Status | Dilli | Rolex |Lokesh Kanagaraj | REDITS |",
            channel:"@redits16",
            views:"3.3M views"
        },
      
      ])

    return ( 
        <div className="videos">
            <h1>Feature Videoes</h1>
            <div className='videodata'>
              {video.map((data)=>{
                return(
                <div className="video"> 
                    <img src={data.thumbnail} alt="" />
                    <div className='videoDetails'>
                     <h3>{data.titel}</h3>
                     <p>{data.channel}</p>
                     <p>{data.views}</p>
                     <a onClick={()=>removeVideo(data.id,data.channel)}>Remove</a>
                   </div>
            </div>
                    

                )
            }
            )}

            </div>
            <h1>Shorts</h1>
            <div className="shortsdata">
               
              {short.map((data)=>{
                return(
                <div className="short"> 
                    <img src={data.thumbnail} alt="" />
                    <div className="shortDetails">
                     <h3>{data.titel}</h3>
                     <p>{data.channel}</p>
                     <p>{data.views}</p>
                     
                   </div>
            </div>
                    

                )
            }
            )}

            </div>


        </div>
     );
}
 
export default Videos;