import React from 'react'
import { connect } from 'react-redux'

class Message extends React.Component {

    render () {
        const { app } = this.props 
        return (
            <div>
                {app.win === undefined && <span>You need 45 points</span>}
                {app.win === true && <span style={{ color:'green' }}>You Win</span>}
                {app.win === false && <span style={{ color:'red' }}>You Loose</span>}
            </div>
        );
    }

}

export default connect(state=>state)(Message);