import { Input } from '@syncfusion/ej2-inputs';
import React, { Component } from 'react';

class DefaultComponent extends Component {
    input1;
    input2;

    componentDidMount() {
        Input.createInput({
            element: this.input1,
            properties: {
                placeholder: 'Enter Song Name'
            }
        });
    }

    render() {
        return (
            <div className="inner-container">
                <input id="input-01" type="text" ref={e1 => (this.input1 = e1)} />
            </div>
        );
    }
}

export default DefaultComponent;