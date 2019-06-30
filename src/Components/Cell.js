import React from 'react';
import { increaseScoreAction, endGame } from '../redux/store';
import { connect } from 'react-redux'


class Cell extends React.Component {

    state = {
        hide : true
    }

    display = (value) => {
        if (this.props.app.win !== undefined)
            return 
        const { dispatch } = this.props
        this.setState({ hide: false})
        if (value) {
            dispatch(increaseScoreAction(value))
            if (this.props.app.score + value >= 45)
                dispatch(endGame(true))
        }
        else
            dispatch(endGame(false))
    }
    

    render() {
        const { value } = this.props
        const { hide } = this.state
        return (
            <div
                style={{ height: '33px', width: '33px', backgroundColor: (hide ? 'green': 'lightgreen'), margin: '8px', lineHeight: '30px', textAlign: 'center' }}
                onClick={() => this.display(value)}
            >
                {!hide && (
                    value ? value : <img width="25px" height="25px" src="/bomb.png" style={{margin: '3px'}}/>
                )}
            </div>
        );
    }
}

export default connect(state => state)(Cell);
