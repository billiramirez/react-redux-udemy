import React from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamCreate extends React.Component {
    
    renderInput ({input}){
        console.log(input);
        return (
            <input {...input}/>
        )
    }

    render(){
        return (
            <div>
                <form>
                    <Field name="title" component={this.renderInput} />
                    <Field name="description" component={this.renderInput} />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'stream-create'
})(StreamCreate);