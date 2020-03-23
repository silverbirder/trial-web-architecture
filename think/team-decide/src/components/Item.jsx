import React from 'react';

class Item extends React.Component {
    handleClick(name) {
        alert(`Cart in ${name}`);
    }

    render() {
        return (
            <div>
                商品名:{this.props.name}
                <button onClick={this.handleClick.bind(this, this.props.name)}>Cart In</button>
            </div>
        );
    }
}

export default Item;