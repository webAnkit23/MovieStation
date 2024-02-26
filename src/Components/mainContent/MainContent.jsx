import React from 'react'
import ContentWrapper from '../ContentWrapper';
import Trending from '../Trending/Trending';
import TopRated from '../topRated/TopRated';
export default function MainContent() {
  return (
        <ContentWrapper>
             <Trending />
              <div style={{height:'100px'}}></div>
             <TopRated />
        </ContentWrapper>   
  )
}
