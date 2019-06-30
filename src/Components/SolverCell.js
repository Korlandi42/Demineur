import React from 'react';
import { connect } from 'react-redux'


class SolverCell extends React.Component {


    render() {
        const { sum } = this.props
        if (!sum) return null
        return (
            <div
            style={{ height: '33px', width: '33px', backgroundColor: 'pink', margin: '8px', fontSize: '11px', lineHeight: '30px', textAlign: 'center'}}
            >
               {sum.sum + '/' + sum.bomb} <img style={{marginLeft: '-3px'}} width="9px" height="8px" src="/bomb.png" />
            </div>
        );
    }

}

export default connect(state=>state)(SolverCell);