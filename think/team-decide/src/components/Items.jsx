import React from 'react';
import Item from "./Item";

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        // window.postal.subscribe({
        //     channel: 'search',
        //     topic: 'search.word',
        //     callback: function (data) {
        //         this.setState({items: data.items});
        //     }
        // });
    }
    render() {
        return (
            <ul>
                {this.state.items.map((item) => {
                    return <Item name={item.name}></Item>
                })}
            </ul>
        )
    }
}

export default Items;