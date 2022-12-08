import React, { Component } from 'react'
import { Matche } from "./match";
import { Stand } from "./stand";
class App extends Component {
  state = {
    standings: [],
    matches: [],
  }

  componentDidMount = async () => {
    // console.log(matches);
    const datamatches = await window.fetch(`/api/matches`).then(res => res.json())
    const datastandings = await window.fetch(`/api/standings`).then(res => res.json())
    this.setState({ standings: datastandings, matches: datamatches })
  }

  render() {
    var reduced = []
    if (this.state.matches.length !== 0) {
      reduced = this.state.matches.matches.reduce((prev, cur) => {
        const where = prev.filter(e => e.stage === cur.stage);
        if (where.length === 0) {
          var stagematch = { 'stage': cur['stage'], 'matches': [cur] }
          prev.push(stagematch)
        } else {
          where[0]['matches'].push(cur)
        }
        return prev
      }, [])
      var matchesGroupStage = reduced[0].matches
      var reducedGroupStage = matchesGroupStage.reduce((prev, cur) => {
        const where = prev.filter(e => e.group === cur.group);
        if (where.length === 0) {
          var stagematch = { 'group': cur['group'], 'matches': [cur], 'standing': this.state.standings.standings.filter(e => e.group === cur['group']) }
          prev.push(stagematch)
        } else {
          where[0]['matches'].push(cur)
        }
        return prev
      }, [])
      reduced[0].groupMatches = reducedGroupStage
      console.log(reduced)
    } else {

    }

    return (
      <><Header title='' />
        <section className="container">

          {reduced.map(e => <div className="ac" key={e.stage}>

            <label className="ac-label" htmlFor={e.stage} style={{ direction: 'rtl', paddingRight: 50, }}>{stage_name(e.stage)}</label>
            <input className="ac-input" id={e.stage} name={e.stage} type="checkbox" />

            <article className="ac-text">

              {e.groupMatches
                ? e.groupMatches.map(e => <div className="ac-sub" key={e.group}>
                  <label className="ac-label" htmlFor={e.group} style={{ direction: 'rtl' }} >{e.group.replace('GROUP_','المجموعة ')}</label>
                  <input className="ac-input" id={e.group} name={e.group} type="checkbox" />
                  <article className="ac-sub-text">
                    {e.matches.map((e, index) => <Matche key={'match' + index} match={e} />)}
                    {e.standing.map((e, index) => <Stand key={'standingtable' + index} standing={e} />)}
                  </article>
                </div>)
                : e.matches.map((e, index) => <Matche key={'match' + index} match={e} />)}

            </article>

          </div>)}



        </section>
        <div style={{ height: 300 }}></div>
      </>
    )
  }
}
function Header(params) {
  return (<>
    <div id="logo-header">
      <img id="logo-img" src="logo.png" alt="" style={{ height: "300px" }} />
    </div>
    <div id="header" style={{ height: '20rem' }} className="bg-primary">
      <div id="header-background" style={{ height: '100%', width: '100%' }}>
        <div style={{ direction: 'rtl', fontSize: '50px', marginRight: '100px' }} className="p-5">
          <h1 style={{ fontWeight: 800, fontSize: '70px' }}>
            كأس
          </h1>
          <h1 style={{ fontWeight: 800, fontSize: '90px' }}>
            العالم
          </h1>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center" style={{ marginTop: '30px' }}>
      <img src="qatar-word.png" alt="" style={{ width: '400px', margin: '0px auto' }} />
    </div>
  </>);
}

function stage_name(title) {
  switch (title) {
    case 'GROUP_STAGE':
      return "دور المجموعات";

    case 'LAST_16':
      return "دور الـ16";


    case 'QUARTER_FINALS':
      return "ربع النهائي";

    case 'SEMI_FINALS':
      return "نصف النهائي";

    case 'THIRD_PLACE':
      return "المركز الثالث";

    case 'FINAL':
      return "النهائي";

    default:
      break;
  }
}

export default App