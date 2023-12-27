import React from 'react';
import "./MemberCards.css";
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img4 from './images/4.jpg';

const MemberCard = ({ imgSrc, name, community, role }) => (
  <div className="mem-1">
    <img src={imgSrc}/><br />
    <b>{name}</b>
    <div>{community}</div>
    <div>{role}</div>
    <div className="button-container">
      <button className="bg-blue-500 text-white px-2 py-1 mr-1">Explore</button>
      <button className="bg-green-500 text-white px-2 py-1">Chat</button>
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
          <div className="he2"><font size="3">Invite People</font></div>
        </div>
        <hr />
        <div className="con1">
          <div className="con1-1"><b><u>Members</u></b></div>
          <div className="con1-2"><b>Use Groups</b></div>
        </div>
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
          <MemberCard imgSrc={img1} name="Lizzie Austin" community="Global Community" role="Lead. she/her" />
          <MemberCard imgSrc={img2} name="Addi Williams" community="Global Community" role="Lead. she/her" />
          <MemberCard imgSrc={img3} name="Jampson Simson" community="Global Community" role="Lead. she/her" />
          <MemberCard imgSrc={img4} name="Vova Lisa" community="Global Community" role="Lead. she/her" />
          <MemberCard imgSrc={img5} name="Lisa Jamson" community="Global Community" role="Lead. she/her" />
          <MemberCard imgSrc={img6} name="Carlisle" community="Global Community" role="Lead. she/her" />
        </div>
      </body>
    </html>
  </>
);

export default MemberCards;
