import NavigationBar from '../NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
    return (
        <>
            <NavigationBar />
            <div className="app">
                <div className="app-text">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in condimentum eros.</div>
                    <div className="mt-4">Nunc feugiat nibh felis, hendrerit scelerisque justo fringilla eget. Etiam bibendum ut ex at vestibulum. Donec tempus ultrices massa sed iaculis. Sed scelerisque pharetra consectetur. Donec ornare sem risus, non condimentum nulla maximus et. Ut vestibulum porta urna. Aliquam placerat elementum turpis, id lobortis turpis porta non. Aenean ut tempor metus. Aenean commodo ipsum vitae massa volutpat aliquet. Curabitur pretium orci tempor augue sollicitudin facilisis. Etiam nec tortor vel ligula pulvinar lacinia. Phasellus non mollis tellus. Morbi iaculis mattis dolor venenatis rutrum.</div>
                </div>
                <div className="clearfix"></div>
            </div>
        </>
    );
}