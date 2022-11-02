
import React from 'react'

export const MContext = React.createContext();
export default class MyProvider extends React.Component {
    state = {currentPage: 0}
    render() {
        return (
            <MContext.Provider value = {
                {state: this.state,
                 setCurrentPage: (value) => this.setState({
                    currentPage: value
                 })}}> 
            {this.props.children}
            </MContext.Provider>
        )
    }
}