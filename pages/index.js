import React from 'react'
import PageHead from '../component/PageHead'
import RecentSearch from '../component/RecentSearch' 
import ExploreSearch from '../component/ExploreSearch'
import TopAirlineDeal from '../component/TopAirlineDeal' 
import LatestBlogs from '../component/LatestBlogs'
import ExploreTravel from '../component/ExploreTravel'
import { Hostname, siteid } from '../utils/static'
import { getApiData } from './api/GetApiResp'
import OurHighlights from '../component/OurHighlights' 


const index = ({ allblog }) => {

  const blogFouritem = allblog?.slice(0, 4).filter((item) => item.status === "Active") || [];

  return (
    <>
      <PageHead
        title={`BrandName : Hotels, Vacations & Travel Deals`}
        description={`Book Tickets, luxury hotels tickets with best deals from your destinations & Get Best Price Guarantee @ ${Hostname}`}
        keywords={`${Hostname}, Hotels, Travel Deals`}
      />

      <ExploreTravel />

      <RecentSearch
        Title="Top / Recent Searches"
        Routes={[
          { 'from': 'DEL', 'to': 'BOM', 'date': '28 Nov 2023', 'traveller': 'A-1 C-1 I-1, Economy', 'thumbnail': 'recent-search-1.webp', },
          { 'from': 'DEL', 'to': 'GOI', 'date': '28 Nov 2023', 'traveller': 'A-1 C-1 I-1, Economy', 'thumbnail': 'recent-search-2.webp', },
          { 'from': 'DEL', 'to': 'NYC', 'date': '28 Nov 2023', 'traveller': 'A-1 C-1 I-1, Economy', 'thumbnail': 'recent-search-3.webp', },
        ]}
      />


      <OurHighlights
        Title="Why Choose Us"
        Content={[
          {
            'icon': 'best-price-ic.png',
            'title': 'Best Price Guarantee',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          },
          {
            'icon': 'easyquick-book.png',
            'title': 'Easy & Quick Booking',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          },
          {
            'icon': 'tour-selection-ic.png',
            'title': 'Best Tour Selection',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          },
          {
            'icon': 'rating-icwhy.png',
            'title': 'Memorable experiences',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          }
        ]}
      />

      <TopAirlineDeal
        Title="Top Airline Deals"
        ViewALLBtn={'/airlines'}
        Routes={[
          { 'thumbnail': 'airline-aqr-1.png' },
          { 'thumbnail': 'airline-aqr-2.png' },
          { 'thumbnail': 'airline-aqr-3.png' },
          { 'thumbnail': 'airline-aqr-4.png' },
          { 'thumbnail': 'airline-aqr-5.png' },
          { 'thumbnail': 'airline-aqr-6.png' },
          { 'thumbnail': 'airline-aqr-7.png' },
          { 'thumbnail': 'airline-aqr-8.png' },
        ]}
      />



      <ExploreSearch
        Routes={[
          { 'from': 'New York', 'to': 'New York', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-1.webp', 'code': 'BOM - NYC', 'price': '$ 345' },
          { 'from': 'New York', 'to': 'Germany', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-2.webp', 'code': 'BOM - NYC', 'price': '$ 345' },
          { 'from': 'New York', 'to': 'Greece', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-3.webp', 'code': 'BOM - NYC', 'price': '$ 345' },
          { 'from': 'New York', 'to': 'Scotland', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-4.webp', 'code': 'BOM - NYC', 'price': '$ 345' },
          { 'from': 'New York', 'to': 'Greece', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-5.webp', 'code': 'BOM - NYC', 'price': '$ 345' },
          { 'from': 'New York', 'to': 'Greece', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-3.webp', 'code': 'BOM - NYC', 'price': '$ 345' },
          { 'from': 'New York', 'to': 'Scotland', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-6.webp', 'code': 'BOM - NYC', 'price': '$ 345' },
          { 'from': 'New York', 'to': 'Germany', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-2.webp', 'code': 'BOM - NYC', 'price': '$ 345' },
          { 'from': 'New York', 'to': 'Greece', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-5.webp', 'code': 'BOM - NYC', 'price': '$ 345' },
        ]}
      />



      <div className='overflow-hidden'>


        <LatestBlogs
          Title="Enjoy Fresh Travel Blogs"
          ViewALLBtn={'/blog'}
          BlogsItems={blogFouritem}
          error={`Sorry ! No blogs items found`}
        />


 
      </div>

       
    


    </>
  )
}

export default index




export const getStaticProps = async ({ params }) => {
  // All blogs
  const GetBlogData = await getApiData(`https://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: "",
      title: "",
      titleUrl: "",
      content: "",
      description: "",
      keywords: "",
      posttime: "",
      status: "",
      heading: "",
      img_url: "",
      siteId: siteid,
      categoryName: "",
      blogdes2: "",
      blogTagsName2: "",
      extarTag: "",
      tfnHeader: "",
      tfnFooter1: "",
      tfnFooter2: "",
      tfnFooter3: "",
      tfnPopup: "",
    }),
    redirect: 'follow'
  });


  return {
    props: {
      allblog: GetBlogData.response || [],
    },
    revalidate: 60,
  };
};
