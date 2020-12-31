import React, { Fragment, useState } from 'react';


// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class MayerlyBernalNerdletNerdlet extends React.Component {

    state = {
        color:""
    }
    onChangeHandler = e => {
        this.setState({
            color: e.target.value
        })
    }

    render() {
        const styleObj = {
            background: this.state.color
        }
        return (
            <Fragment>
                <div className="containerFirts">
                    <div style={styleObj} className="containerColor">
                    </div>
                    <div className="containerMsj">
                        <h4>Message to Update</h4>
                    </div>
                </div>
                <div className = "containeInput">
                    <input
                    placeholder="Enter the color"
                    onChange = {this.onChangeHandler}
                    value = {this.state.color}
                    type="text"
                    />
                </div>
            </Fragment>
        );
    }
}
