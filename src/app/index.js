import React from 'react'
import ReactDom from 'react-dom'

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}


const renderedNames = names.map(name => <li key={name}>{name}</li>)

ReactDom.render(<ol>{renderedNames}</ol>, document.getElementById("main"))
