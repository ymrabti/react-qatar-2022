import React from 'react'
export function Matche(params) {
    const homeTeam = params.match.homeTeam
    const awayTeam = params.match.awayTeam

    if (homeTeam.name == null) {
        // continue
    }

    // const comp = params.match.competition
    const dateUtc = params.match.utcDate
    const matchTime = new Date(dateUtc)
    const dateString = matchTime.getUTCFullYear() + "/" + (matchTime.getUTCMonth() + 1) + "/" + matchTime.getUTCDate() + " " + matchTime.getUTCHours() + ":" + matchTime.getUTCMinutes() + ":" + matchTime.getUTCSeconds()
    return <div className="col-lg-12">
        <div className="card shadow rounded-pill mt-5" style={{ overflow: 'hidden' }}>
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-3 bg-primary d-flex flex-direction-column justify-content-center align-items-center" style={{ borderRight: 'solid 5px #5b0d25' }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ textAlign: 'center', margin: 'auto 0' }}>
                            <div>
                                <div className="flag">
                                    <img className="rounded-circle border border-2" src={homeTeam.crest} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                </div>
                                <h5 title={homeTeam.name} style={{ margin: 'auto 4px' }}>{homeTeam.tla === null ? 'TBD' : homeTeam.tla}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{ textAlign: 'center' }}>
                        <div className="row">
                            <div className="col-lg-4" style={{ margin: 'auto 0px' }}>
                                <h3>
                                    {params.match.score.fullTime.home ?? '-'}
                                </h3>
                            </div>
                            <div className="col-lg-4">
                                <i>{status_match(params.match.status)}</i>
                                <h6>{dateString}</h6>
                            </div>
                            <div className="col-lg-4" style={{ margin: 'auto 0px' }}>
                                <h3>
                                    {params.match.score.fullTime.away ?? '-'}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 bg-primary d-flex flex-direction-column justify-content-center align-items-center" style={{ borderLeft: 'solid 5px #5b0d25' }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ textAlign: 'center', margin: 'auto 0' }}>
                            <div>
                                <div className="flag">
                                    <img className="rounded-circle border border-2" src={awayTeam.crest} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                </div>
                                <h5 title={awayTeam.name} style={{ margin: 'auto 4px' }}>{awayTeam.tla === null ? 'TBD' : awayTeam.tla}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


function status_match(status) {
    switch (status) {
        case 'FINISHED':
            return "انتهت";

        case 'TIMED':
            return "مبرمجة";


        case 'IN_PLAY':
            return "تلعب الآن";


        default:
            break;
    }
}