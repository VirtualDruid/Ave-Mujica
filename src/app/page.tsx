import { ReactElement } from 'react';
import './style.css';

const DARK_RED = "#8B0000";
const DAYS_COUNT: ((key: string) => ReactElement)[] = [
    (key: string) => (<div key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧ `}
    </div>),
    (key: string) => (<div key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧㄧ `}
    </div>),
    (key: string) => (<div key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧㄧㄧ `}
    </div>),
    (key: string) => (<div key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧㄧㄧㄧ `}
    </div>),
    (key: string) => (<div key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw", textDecoration: "line-through" }}>
        {` ㄧㄧㄧㄧ `}
    </div>)
];
export default function Home() {
    let today = new Date();
    //today = new Date(2025, 0, 2, 0, 0, 0, 0);
    const _2024_12_1 = new Date(2024, 11, 1, 0, 0, 0, 0);
    let deltaDay = Math.floor(Math.abs(today.getTime() - _2024_12_1.getTime()) / (24 * 60 * 60 * 1000));
    let fives: any[] = Array(Math.floor(deltaDay / 5));
    fives = fives.map((_, i) => { return DAYS_COUNT[4](`${i}`) });
    const remainder = DAYS_COUNT[deltaDay % 5]("remainder");
    //remainder.key = "remainder";
    return (<div style={{ alignItems: "center", justifyItems: "center", width: "100dvw" }}>
        <div style={{ color: "white", fontFamily: "elffont-rock", fontSize: "5dvw" }}>
            {`ㄕˊ ㄐㄧㄢ ㄧˇ  ㄐㄧㄥ ㄍㄨㄛˋ ㄌㄜ˙`}
        </div>
        <div style={{ display: "flex", width: "100dvw", alignContent: "center", justifyContent: "center" }}>
            {[remainder, ...fives]}
        </div>
    </div>)
}