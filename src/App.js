import React from 'react';
import Hiscores from './Hiscores';
import './App.css';

export default function App() {
    return (
        <>
            <div className="app">
                <h1>nardnob</h1>
                <Hiscores />
                <div class="app-text">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in condimentum eros.</div>
                    <div style={{marginTop: 10 + "px"}}>Nunc feugiat nibh felis, hendrerit scelerisque justo fringilla eget. Etiam bibendum ut ex at vestibulum. Donec tempus ultrices massa sed iaculis. Sed scelerisque pharetra consectetur. Donec ornare sem risus, non condimentum nulla maximus et. Ut vestibulum porta urna. Aliquam placerat elementum turpis, id lobortis turpis porta non. Aenean ut tempor metus. Aenean commodo ipsum vitae massa volutpat aliquet. Curabitur pretium orci tempor augue sollicitudin facilisis. Etiam nec tortor vel ligula pulvinar lacinia. Phasellus non mollis tellus. Morbi iaculis mattis dolor venenatis rutrum.</div>
                </div>
                <div class="clearfix"></div>
            </div>
        </>
    );
}