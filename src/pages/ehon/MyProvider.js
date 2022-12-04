
import React from 'react'

export const MContext = React.createContext();
export default class MyProvider extends React.Component {
    state = {currentPage: 0};
    visited = {visitedPage: [false, false, false, false, false, false, false, false, false]};
    render() {
        return (
            <MContext.Provider value = {
                {state: this.state,
                 visited: this.visited,
                 setCurrentPage: (value) => this.setState({
                    currentPage: value
                 }),
                 visitedCurrentPage: (value) => {this.visited.visitedPage[value] = true}}}> 
            {this.props.children}
            </MContext.Provider>
        )
    }
}