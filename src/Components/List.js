import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../Styles/main.css";
import {Card, Container, Image} from 'semantic-ui-react';
import axios from 'axios';
import ListReservations from './ListReservations';
import {MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';

class ListView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: '', characters: {}};
        // var public_key = '2d3152cc489d1fa0dc72a0c040e78ebb';
        // var private_key = '950f1f8af699f18529e5b8025a734a262218bda2';
        // var timestamp = Date.now();
        // var msg = `${timestamp}${private_key}${public_key}`;
        // var md5 = require('md5');
        // var hash = md5(msg);
         this.baseUrl = `http://localhost:3000/get-queue`;

    }

    onchange = e => {
        this.setState({value: e.target.value});
        this.handleClick();
    }


    componentDidMount() {
        console.log("hi")
        console.log(localStorage.getItem('jwt'))
        let url = "http://localhost:3000/get-queue"
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
        };
        axios.get(url,config).then((response) => {
            console.log(response.data)
            this.setState({
                characters: response.data
            });
        }).catch((error) => {
            console.log(error)
            this.setState({
                characters: {}
            });
        });

    }

    handleClick() {
        let url = ""
        if (this.state.value === "Bowling") {
            url = `${this.baseUrl}?game=bowling`;//url for bowling
        } else {
            url = `${this.baseUrl}?game=billiards`;//url for billiards
        }
        console.log(url)
        axios.get(url).then((response) => {
            console.log(response.data)
            this.setState({
                characters: response.data
            });
        }).catch((error) => {
            console.log(error)
            this.setState({
                characters: {}
            });
        });
    }

    render() {
        const {value} = this.state;
        return (

            <React.Fragment>
                <Container>
                    <div className='radio'>
                        <h2>Game : {value}</h2>
                        <div>
                            <form>
                                <label><input
                                    type="radio"
                                    value="Billiards"
                                    name="radio"
                                    className="forminput"
                                    //checked={this.state.selectFilter === "Billiards"}
                                    // onChange={this.handleFilter}
                                    onChange={this.onchange}
                                />
                                    Billiards
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="Bowling"
                                        name="radio"
                                        className="forminput"
                                        //checked={this.state.selectFilter === "Bowling"}
                                        // onChange={this.handleFilter}
                                        onChange={this.onchange}
                                    />
                                    Bowling
                                </label>
                            </form>
                        </div>
                        <div>

                        </div>

                    </div>
                    <div>
                        <ListReservations characters={this.state.characters}/>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

ListView.propTypes = {
    count: PropTypes.number,
    limit: PropTypes.number,
    offset: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.shape({
        // id:PropTypes.number,
        // name:PropTypes.string,
        // modified:PropTypes.string,
        // thumbnail:PropTypes.shape({
        //   path:PropTypes.string,
        //   extension: PropTypes.string
        // })
        token_id: PropTypes.number,
        dateCreated: PropTypes.date,
        name: PropTypes.string,
        mobile: PropTypes.string,
        game: PropTypes.string
    })),
    total: PropTypes.number,
}
export default ListView
