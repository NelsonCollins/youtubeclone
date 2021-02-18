import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from '../components/ChannelRow';
import VideoRow from '../components/VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
            </div>
        <hr />

        <VideoRow 
            views="1.3B"
            subs="1M"
            description="Technology plays a huge role in our daily lives, from the simplest of
             apps to the most groundbreaking inventions. 
             Every website or piece of software that we encounter has been built by 
            a web developer—but what exactly is web development, and what does a web developer do?"
            timestamp="59 seconds ago"
            channel="Nelson Collins"
            title="How To Become A Web Developer in 2021"
            image= "https://miro.medium.com/max/1980/0*HICLyAdNSIyT0ODU.jpg"
            />
        <hr />

        <VideoRow 
            views="1.3B"
            subs="1M"
            description="Technology plays a huge role in our daily lives, from the simplest of
             apps to the most groundbreaking inventions. 
             Every website or piece of software that we encounter has been built by 
            a web developer—but what exactly is web development, and what does a web developer do?"
            timestamp="59 seconds ago"
            channel="Nelson Collins"
            title="How To Become A Web Developer in 2021"
            image= "https://i.ytimg.com/vi/bDtxF7qSofg/maxresdefault.jpg"
            />

        <VideoRow 
            views="1.3B"
            subs="1M"
            description="Technology plays a huge role in our daily lives, from the simplest of
             apps to the most groundbreaking inventions. 
             Every website or piece of software that we encounter has been built by 
            a web developer—but what exactly is web development, and what does a web developer do?"
            timestamp="59 seconds ago"
            channel="Nelson Collins"
            title="How To Become A Web Developer in 2021"
            image= "https://d33wubrfki0l68.cloudfront.net/059e1bfc1be05e35baa40b9b706c8b7a84785ba8/18753/en/blog/web_dev_pillar_page-ab4f236edec545e07227ed00403cd6d45e905785ecb3f02ee353a7d8b2400687.jpg"
            />
        
        <VideoRow 
            views="1.3B"
            subs="1M"
            description="Technology plays a huge role in our daily lives, from the simplest of
             apps to the most groundbreaking inventions. 
             Every website or piece of software that we encounter has been built by 
            a web developer—but what exactly is web development, and what does a web developer do?"
            timestamp="59 seconds ago"
            channel="Nelson Collins"
            title="How To Become A Web Developer in 2021"
            image= "https://miro.medium.com/max/1980/0*HICLyAdNSIyT0ODU.jpg"
            />
        </div>
    )
}

export default SearchPage
