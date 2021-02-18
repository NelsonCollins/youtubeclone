import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';
import profile from '../images/profile.jpg'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title= "Nelson Web Developer"
                    views= "2.3B Views"
                    timestamp= "3 days"
                    channelImage= "https://avatars.githubusercontent.com/u/10922800?s=400&u=67dd516a5bcffb91243c5d0e22356c470f9b0cd3&v=4"
                    channel= "Nelson"
                    image= "https://i.ytimg.com/vi/bDtxF7qSofg/maxresdefault.jpg"

                />

                <VideoCard 
                    title= "Nelson Web Developer"
                    views= "2.3B Views"
                    timestamp= "3 days"
                    channelImage="https://avatars.githubusercontent.com/u/10922800?s=400&u=67dd516a5bcffb91243c5d0e22356c470f9b0cd3&v=4"
                    channel= "Nelson"
                    image= "https://d33wubrfki0l68.cloudfront.net/059e1bfc1be05e35baa40b9b706c8b7a84785ba8/18753/en/blog/web_dev_pillar_page-ab4f236edec545e07227ed00403cd6d45e905785ecb3f02ee353a7d8b2400687.jpg"

                />

                <VideoCard 
                    title= "Nelson Web Developer"
                    views= "2.3B Views"
                    timestamp= "3 days"
                    channelImage="https://avatars.githubusercontent.com/u/10922800?s=400&u=67dd516a5bcffb91243c5d0e22356c470f9b0cd3&v=4"
                    channel= "Nelson"
                    image= "https://miro.medium.com/max/1980/0*HICLyAdNSIyT0ODU.jpg"

                />

                
            </div>
        </div>
    )
}

export default RecommendedVideos
