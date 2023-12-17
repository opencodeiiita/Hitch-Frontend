'use client';
import React from 'react';
import WorkspaceCard from './WorkspaceCard';
import WorkspaceMobile from './WorkspaceMobile';
import './index.css';
export default function WorkCard(){
    return(
        <div>
            <WorkspaceCard/>
            <WorkspaceMobile/>
        </div>
    )
}