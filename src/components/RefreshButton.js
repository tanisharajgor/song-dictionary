import React, { Component } from 'react';
import { Button } from "@blueprintjs/core";

class RefreshButton extends Component {
    handleRefresh = () => {
        window.location.reload(); // Refresh the page
    };

    render() {
        return (
            <Button onClick={this.handleRefresh} icon="refresh" intent="danger" text="Clear Song Selection" />
        );
    }
}

export default RefreshButton;