import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
    static defaultProps = {
        name: "기본 이름",
    };

    state = {
        number: 0,
    };

    render() {
        return (
            <div>
                <p>Hello, My name is {this.props.name}</p>
                <p>I'm {this.props.age} years old.</p>
                <p>Number: {this.state.number}</p>
                <button
                    onClick={() => {
                        this.setState({
                            number: this.state.number + 1,
                        });
                    }}
                >
                    Plus
                </button>
            </div>
        );
    }
}

MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
};
export default MyComponent;
