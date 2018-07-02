/* eslint-disable react/prop-types */
import React, {Component} from 'react';

class CategorySelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ['Politics', 'News']
        };
    }

    getOptions = () => {
        return this.state.categories.map(category => <option key={category} value={category}>{category}</option>);
    };

    render() {
        const {handleChange} = this.props;
        return (
            <div>
                <select value={this.state.category} onChange={handleChange}>
                    {this.getOptions()}
                </select>
            </div>
        );
    }
}

export default CategorySelect;