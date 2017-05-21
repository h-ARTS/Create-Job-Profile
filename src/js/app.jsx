var RegisterRow = React.createClass({
    render: function() {
        return(
            <div className="row">
                <div className="card d-flex flex-row mt-5 p-4 w-75">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

RegisterRow.Summary = React.createClass({
    render: function() {
        return(
            <div className="col-6 col-xs-12">
                <p className="h2 mb-3 mt-4">Your Job Profile</p>
                <div className="card red">
                    <div className="card-block">
                        <p className="lead mb-1">Name</p>
                        <p className="text-primary">{this.props.data.name}</p>
                        <p className="lead mb-1">Birthday</p>
                        <p className="text-primary">{this.props.data.bday}</p>
                        <p className="lead mb-1">Current Job</p>
                        <p className="text-primary">{this.props.data.job}</p>
                        <p className="lead mb-1">Searching for</p>
                        <p className="text-primary">{this.props.data.searchfor}</p>
                        <p className="lead mb-1">Leave a message here:</p>
                        <a href={"mailto:"+this.props.data.email} className="text-primary">{this.props.data.email}</a>
                    </div>
                </div>
            </div>
        );
    }
});

RegisterRow.Form = React.createClass({
    formatDate: function(date) {
        var d = new Date(date);
        return d.getDate() + '.' + (d.getMonth()+1) + '.' + d.getFullYear();
    },
    onFormSubmit: function(e) {
        e.preventDefault();

        var updates = {},
            name = this.refs.name.value,
            email = this.refs.email.value,
            bday = this.refs.bday.value,
            job = this.refs.job.value,
            searchfor = this.refs.searchfor.value;

        if(name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }
        if(email.length > 0) {
            this.refs.email.value = '';
            updates.email = email;
        }
        if(bday.length > 0) {
            this.refs.bday.value = '';
            updates.bday = this.formatDate(bday);
        }
        if(job.length > 0) {
            this.refs.job.value = '';
            updates.job = job;
        }
        if(searchfor.length > 0) {
            this.refs.searchfor.value = '';
            updates.searchfor = searchfor;
        }

        this.props.onNewData(updates);
    },
    render: function() {
        return(
             <div className="col-6 col-xs-12">
                <h1 className="display-4">Register now!</h1>
                <form onSubmit={this.onFormSubmit} className="mt-3">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" ref="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input id="email" ref="email"  type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bday">Birthday</label>
                        <input id="bday" ref="bday" type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="job">Current Job</label>
                        <input id="job" ref="job" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="searchfor">Searching for</label>
                        <input id="searchfor" ref="searchfor" type="text" className="form-control" />
                    </div>
                    <button className="btn btn-outline-primary mb-3 mt-2">Submit</button>
                </form>
            </div>
        );
    }
});

var RegisterApp = React.createClass({
    getInitialState: function() {
        return {
            name: this.props.name,
            email: this.props.email,
            bday: this.props.bday,
            job: this.props.job,
            searchfor: this.props.searchfor
        }
    },
    handleFormData: function(object) {
        this.setState(object);
    },
    render: function() {
        var datas = {
            name: this.state.name,
            email: this.state.email,
            bday: this.state.bday,
            job: this.state.job,
            searchfor: this.state.searchfor
        };
        return(
            <RegisterRow>
                <RegisterRow.Form onNewData={this.handleFormData} />
                <RegisterRow.Summary data={datas} />
            </RegisterRow>
        );
    }
});

ReactDOM.render(
    <RegisterApp />,
    document.getElementById('app')
);