import './style.css';

const DARK_RED = "#8B0000";
const DAYS_COUNT = [
    (<div style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧ `}
    </div>),
    (<div style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧㄧ `}
    </div>),
    (<div style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧㄧㄧ `}
    </div>),
    (<div style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧㄧㄧㄧ `}
    </div>),
    (<div style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw", textDecoration: "line-through" }}>
        {` ㄧㄧㄧㄧ `}
    </div>)
]
export default function Home() {
    let today = new Date();
    //today = new Date(2025, 0, 2, 0, 0, 0, 0);
    const _2024_12_1 = new Date(2024, 11, 1, 0, 0, 0, 0);
    let deltaDay = Math.floor(Math.abs(today.getTime() - _2024_12_1.getTime()) / (24 * 60 * 60 * 1000));
    const fives: any[] = Array(Math.floor(deltaDay / 5));
    fives.fill(DAYS_COUNT[4], 0, fives.length);
    const remiander = DAYS_COUNT[deltaDay % 5];
    return (<div style={{ alignItems: "center", justifyItems: "center", width: "100dvw" }}>
        <div style={{ color: "white", fontFamily: "elffont-rock", fontSize: "5dvw" }}>
            {`ㄕˊ ㄐㄧㄢ ㄧˇ  ㄐㄧㄥ ㄍㄨㄛˋ ㄌㄜ˙`}
        </div>
        <div style={{ display: "flex", width:"100dvw", alignContent: "center", justifyContent: "center" }}>
            {[remiander, ...fives]}
        </div>
    </div>)
}