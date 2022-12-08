import React from 'react'
import { Matche } from "./match";
import { Stand } from "./stand";
export function Expanded(params) {
    return <div className="container" style={{ marginTop: '50px' }}>
    <div className="p-5 mt-1">
        <div className="row" style={{ direction: 'rtl' }}>
            <h1>
                <b>المجموعات</b>
            </h1>
            <hr />
        </div>
        <div className="row" id="standings">
            {/* Table Standings */}
            {this.state.standings.length === 0 ? <div /> : this.state.standings.standings.map((e, index) => <Stand key={'standingtable' + index} standing={e} />)}
        </div>
    </div>
    <div id="matches " className="mt-5">
        <div className="row" style={{ margin: '0px' }}>
            <h1 style={{ direction: 'rtl' }}>
                <b>المباريات</b>
            </h1>
            <hr />
            <div className="row mb-5" id="matches">
                {/* Matches */}
                {this.state.matches.length === 0 ? <div /> : this.state.matches.matches.map((e, index) => <Matche key={'match' + index} match={e} />)}
            </div>
        </div>
    </div>
</div>;
}