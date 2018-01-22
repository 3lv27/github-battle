import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectLanguage extends Component {
    render () {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
            <ul className="languages">
                {languages.map(function (lang) {
                    return (
                        <li
                            style={lang === this.props.selectedLanguage ? { color: '#d0021b' } : null}
                            onClick={this.props.onSelect.bind(null, lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,

}


class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: 'All'
        };
    
        this.updateLanguage = this.updateLanguage.bind(this);
    }


    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang,
            }
        });
    }

    render() {  
        return (
           <div>
               <SelectLanguage 
               selectedLanguage = {this.state.selectedLanguage}
               onSelct= {this.updateLanguage}/>
            </div>
       
        )
    }
}

export default Popular