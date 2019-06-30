import React from 'react';
import Cell from './Cell'
import SolverCell from './SolverCell'
import { connect } from 'react-redux'


class Grid extends React.Component {
    
    state = {
        map: [],
        sumrow: [],
        sumcol: []
    }

    componentWillMount() {
        this.generateRow()
    }

    generateRow = () => {
        let map = []
        for (let j = 0; j < 6; j++) {
            map[j] = []
            for (let i = 0; i < 6; i++) {
                map[j][i] = getRandomInt(4)
            }
        }
        this.setState({ map }, () => {
            let sumcol = this.countCol(map)
            let sumrow = this.countRow(map)
            this.setState({...this.state, sumrow, sumcol})
        })
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }   
    }

    countRow = (map) => {
        let sumrow = []
        for (let j in map)
        {
            let sum = 0
            let bomb = 0
            for (let i in map[j])
            {
                sum += map[j][i]
                if (map[j][i] === 0)
                    bomb += 1
            }
            sumrow.push({sum , bomb})
        }
        return sumrow
    }

    countCol = (map) => {
        let sumcol = []
        for (let i = 0; i < 6; i++)
        {
            let sum = 0
            let bomb = 0
            for (let j = 0; j< 6; j++)
            {
                sum += map[j][i]
                if (map[j][i] === 0)
                    bomb += 1
            }
            sumcol.push({sum , bomb})
        }
        return sumcol
    }

    render () {
        const { map, sumrow, sumcol} = this.state
        return (
            <div className="Grid" style={{marginBottom: '15px'}}>
                {map.map((row, y)=> {
                    return (
                        <div key={y} style={{ display: 'flex' }}>
                            {row.map((cell, x) => {
                                return (<Cell key={x} value={cell}/>)
                            })}
                            <SolverCell sum={sumrow[y]}/>
                        </div>
                    )
                })}
                <div style={{ display: 'flex' }}>
                {
                    sumcol.map((solvercell, i)=> {
                        return(<SolverCell key={i} sum={sumcol[i]}/>)
                    })
                }
                </div>
            </div>
        );
    }
}

export default connect(state => state)(Grid);