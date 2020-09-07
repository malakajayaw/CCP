import React, { Component } from 'react';
export default class DesignationApp extends Component {

    onSubmit(e) {
        e.preventDefault();

        fetch(this.props.formAction, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: this.state.description })
        });

        this.setState({ description: '' });
    }

    render() {
        return (
            <div className="App">
                <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.onSubmit}>
                    <h2>Admin UI Login</h2>
                    <label>
                        <span class="text">user:</span>
                        <input type="email" name="email" /><br />
                    </label>
                    <br />
                    <label>
                        <span class="text">password:</span>
                        <input type="password" name="password" /><br />
                    </label>
                    <br />
                    <div class="align-right">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}


App.defaultProps = {
    action: 'http://don.healthedata.com/admin/login',
    method: 'post'
};

module.exports = DesignationApp;
