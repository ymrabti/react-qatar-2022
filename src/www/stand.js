import React from 'react'
export function Stand(params) {
    return <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
            <div className="card shadow border-none">
                <div className="card-header bg-primary" style={{ textAlign: 'center' }}>
                    <b>{params.standing.group}</b>
                </div>
                <div className="row m-0 bg-secondary">
                    <div className="col-lg-4" style={{ textAlign: 'center' }}>
                        team
                    </div>
                    <div className="col-lg-2">
                        W
                    </div>
                    <div className="col-lg-2">
                        L
                    </div>
                    <div className="col-lg-2">
                        D
                    </div>
                    <div className="col-lg-2">
                        Pts
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    {params.standing.table.map((row, index) => <li key={'standing' + index} className="list-group-item">
                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-center justify-content-center" style={{ textAlign: 'center' }}>
                                <span className="flag">
                                    <img className="rounded-circle border border-2" src={row.team.crest} alt="" style={{ width: '40px', height: '40px' }} />
                                </span>
                                <h5 style={{ margin: 'auto 4px' }}>{row.team.tla}</h5>
                            </div>
                            <div className="col-lg-2">
                                {row.won}
                            </div>
                            <div className="col-lg-2">
                                {row.lost}
                            </div>
                            <div className="col-lg-2">
                                {row.draw}
                            </div>
                            <div className="col-lg-2">
                                <b>{row.points}</b>
                            </div>
                        </div>
                    </li>)}

                </ul>
            </div>
        </div>
        <div className="col-lg-3"></div>
    </div>;
}