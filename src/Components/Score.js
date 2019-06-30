import React from 'react'
import { connect } from 'react-redux'

class Score extends React.Component {
    render () {
        const { app } = this.props
        return (
            <div style={{ marginLeft: '250px', marginBottom: '10px'}}>
                {'Score : ' + app.score}
            </div>
        );
    }
}

export default connect(state=>state)(Score);