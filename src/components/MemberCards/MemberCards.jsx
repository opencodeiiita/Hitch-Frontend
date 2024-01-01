import React from 'react';
import './MemberCards.css'
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img11 from '../images/7.webp';
import img10 from '../images/10.jpg';

const MemberCard = ({ imgSrc, name, community, role }) => (
  <div className="mem-1">
    <img src={imgSrc}/><br />
    <b>{name}</b>
    <div>{community}</div>
    <div>{role}</div>
    <div className="button-container">
      <button className="bg-blue-500 text-white px-2 py-1 mr-1" id="b1">Explore</button>
      <button className="bg-green-500 text-white px-2 py-1" id="b2">Chat</button>
    </div>
  </div>
);
 

const MemberCards = ({ imgSrc, name, community, role }) => (
  <>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <title>Document</title>
      </head>
      <body>
        <div className="header">
          <div className="he1"><font size="5"><b>People</b></font></div>
          <button className="he2"><font size="3">Invite People</font></button>
        </div>
        <hr className="check" />
        <nav>
          <a className="con1-1" href="#"><b><u>Members</u></b></a>
          <a className="con1-2" href="#"><b>Use Groups</b></a>
        </nav>
        <hr className='check1' />
        <br />
        <div className="con2">
          <div>
              <input id="con2-1" type='text' placeholder='Search by FileName or KeyWord'></input>
            </div>
        </div>
        <br />
        <div className="con3">
          <b>50 recommended results</b>
          <div className="sort-filter-container">
            <span>Sort:</span>
            <select>
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
            </select>
            <span>Filter:</span>
            <select>
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <br />
        <div className="Member-Cards">
          <MemberCard imgSrc={img7} name="Lizzie Austin" community="Global Community" role="Lead. she/her" />
          <MemberCard imgSrc={img8} name="Lizzie Austin" community="Global Community" role="Lead. she/her" />
          <MemberCard imgSrc={img9} name="Lizzie Austin" community="Global Community" role="Lead. she/her" />
          <MemberCard imgSrc={img10} name="Lizzie Austin" community="Global Community" role="Lead. she/her" />
          <MemberCard imgSrc={img11} name="Lizzie Austin" community="Global Community" role="Lead. she/her" />
        </div>
      </body>
    </html>
  </>
);
export default MemberCards;
