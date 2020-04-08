import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div>
                商品名:{this.props.name}
            </div>
        );
    }
}

export default Item;