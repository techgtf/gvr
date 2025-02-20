import React, { useEffect, useState } from 'react'
import TaxBenifitIndex from '../components/TaxBenifit'
import HeroSectionAboutUs from "../components/aboutUs/HeroSectionAboutUs"
import * as CONFIG from "../../../config"
import { Helmet } from 'react-helmet'
import axios from "axios";
import Loader from "../../common/Loader/loader";
import { DATA_ASSET_URL } from "../../../config";


export default function TaxBenifits() {
    const [data, setData,] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      axios
        .get(`${DATA_ASSET_URL}faqs/tax-benefits`) 
        .then((response) => {
          setData(response.data.data); // Set the blog data
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <Loader/>;
    if (error) return <p>Error: {error}</p>;

    console.log(data,"tex benefits")
    return (
        <>
            <Helmet>
                <title>Great Value Realty | Tax-benifits</title>
            </Helmet>
            <div className='tax_benifits bg-[#EFF5FA]'>
                <HeroSectionAboutUs
                    img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/taxBenifit/tax_benifits.webp`}
                    heading={"Tax Benefits"}
                    extraClassesImg={"objectRight"}
                />
                <TaxBenifitIndex data={data}/>
            </div>
        </>

    )
}
