import './Hiscores.css';

export default function Hiscores() {
    return (
        <div className="hiscores">
            <div className="hiscores-title">Hiscores</div>
            <input 
                type="text"
                placeholder="Enter a username"
                className="hiscores-input"
            />
        </div>
    );
}