'use client';
import { ReactElement, useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import './style.css';
const DARK_RED = "#8B0000";
const DAYS_COUNT: ((key: string) => ReactElement)[] = [
    (key: string) => (<div suppressHydrationWarning key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧ `}
    </div>),
    (key: string) => (<div suppressHydrationWarning key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧㄧ `}
    </div>),
    (key: string) => (<div suppressHydrationWarning key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧㄧㄧ `}
    </div>),
    (key: string) => (<div suppressHydrationWarning key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw" }}>
        {` ㄧㄧㄧㄧ `}
    </div>),
    (key: string) => (<div suppressHydrationWarning key={key} style={{ marginLeft: "5dvw", color: DARK_RED, fontFamily: "elffont-rock", fontStyle: "italic", fontSize: "7dvw", textDecoration: "line-through" }}>
        {` ㄧㄧㄧㄧ `}
    </div>)
];

function CountDown() {
    const today = new Date();
    console.log(today);
    //today = new Date(2025, 0, 2, 0, 0, 0, 0);
    const _2024_12_1 = new Date(2024, 11, 1, 0, 0, 0, 0);
    const deltaDay = Math.floor(Math.abs(today.getTime() - _2024_12_1.getTime()) / (24 * 60 * 60 * 1000));
    console.log(deltaDay);
    const fives: any[] = Array(Math.floor(deltaDay / 5))
        //XXX: fill is REQUIRED, wtf js
        .fill(undefined)
        .map((e, i) => {
            return DAYS_COUNT[4](`${i}`);
        });
    const remainder = DAYS_COUNT[deltaDay % 5]("remainder");
    return (<div style={{ alignItems: "center", justifyItems: "center", width: "100dvw" }}>
        <div style={{ color: "white", fontFamily: "elffont-rock", fontSize: "5dvw" }}>
            {`ㄕˊ ㄐㄧㄢ ㄧˇ  ㄐㄧㄥ ㄍㄨㄛˋ ㄌㄜ˙`}
        </div>
        <div style={{ display: "flex", width: "100dvw", alignContent: "center", justifyContent: "center" }}>
            {[remainder, ...fives]}
        </div>
    </div>);
}
const NoSSR = dynamic(()=>Promise.resolve(CountDown), {ssr: false});
export default function Home() {
    return (<NoSSR></NoSSR>)
}