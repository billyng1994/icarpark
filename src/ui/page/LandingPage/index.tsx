import React, { FormEvent } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Navbar from "react-bootstrap/esm/Navbar";
import "./style.css";
import { CarparkItem } from "../../../domain/CarparkVacancyDos";
import GovHKExtService from "../../../extService/GovHkExtService";
import { GovHKCarparkVacancyResultResponseDto } from "../../../domain/dto/GovHKDtos";

type Props = {};
type State = {
    district: string,
    //the state change when there is handleInputChange(from input update content by onChange event) which will set the state (re-render)
    vehicleType: "privateCar" | "LGV" | "HGV" | "coach" | "motorCycle",
    //the state change when there is handleInputChange
    result?: CarparkItem[]
    //the state change when there is submitForm(from clicked search button,type="submit" by onSubmit event) which will set the state(re-render)
};

export default class LandingPage extends React.Component<Props, State> {
    state = {
        district: "",
        vehicleType: "privateCar"
    } as State;
    constructor(props: Props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.onCalledApi = this.onCalledApi.bind(this);
    }
    handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // @ts-ignore
        this.setState({
            [name]: value
        } as State);
    }

    submitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); //Prevent the form submit event to trigger page change
        GovHKExtService.getCarparkVacancy(this.onCalledApi);
    }

    onCalledApi(data: CarparkItem[]){
        const district = this.state.district;
        const resultaaa: CarparkItem[] = [];

        for (let item of data) {
            if (item.district && item.district.toLowerCase().indexOf(district.toLowerCase()) >= 0) {
                resultaaa.push(item as CarparkItem);
            }
        }
        this.setState({
            result: resultaaa
        })
    }

    onClickMapButton(latitude: number, longitude: number) {
        const latlng = latitude + "," + longitude;
        const url = "https://maps.google.com/?q=" + latlng + "&ll=" + latlng + "5&z=18";
        window.open(url, '_blank');
    }

    renderList(result?: CarparkItem[]) {
        const uiItems = [];

        if(!result){
            return null;
        }

        for (let item of result) {
            let imageUrl = undefined;
            if (item.renditionUrls) {
                if (item.renditionUrls.banner) {
                    imageUrl = item.renditionUrls.banner;
                } else if (item.renditionUrls.carpark_photo) {
                    imageUrl = item.renditionUrls.carpark_photo;
                }
            }
            uiItems.push(
                <tr>
                    <td>
                        {
                            (imageUrl) ? (
                                <img src={imageUrl} width="100" />
                            ) : null
                        }
                        {/* short hand condition loop: first part before question mark, condition, second part: while true, result return, last part false return */}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.displayAddress}</td>

                    <td>
                        {
                            (item[this.state.vehicleType]) ? item[this.state.vehicleType].space : "N/A"
                        }
                        <Button
                        variant="info"
                        onClick={() => this.onClickMapButton(item.latitude, item.longitude)}
                    >
                        Map</Button>
                        </td>
                </tr>
            );
        }
        return uiItems;
    }

    render() {
        return (
            <div className="navStyle">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand><a href="main.html">Carpark Vacancy</a></Navbar.Brand>

                    </Container>
                </Navbar>
                <Container>
                    <Form id="searchName" onSubmit={this.submitForm}>
                        <Form.Group as={Row} controlId="district">
                            <Form.Label column sm={2}>
                                District
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    name="district"
                                    value={this.state.district}
                                    placeholder="e.g. Kwun Tung"
                                    onChange={this.handleInputChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="vechicleType">
                            <Form.Label column sm={2}>
                                Vehicle Type
              </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    as="select"
                                    name="vehicleType"
                                    value={this.state.vehicleType}
                                    onChange={this.handleInputChange}
                                >
                                    <option value="privateCar">Private Car</option>
                                    <option value="LGV">LGV</option>
                                    <option value="HGV">HGV</option>
                                    <option value="coach">Coach</option>
                                    <option value="motorCycle">Motorcycle</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Button variant="primary" type="submit">Search</Button>{' '}
                    </Form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Total Vacancy</th>
                                <th>Google Map</th>
                                <th>Avaliable space</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.renderList(this.state.result)}
                        </tbody>
                    </Table>
                </Container>

            </div>
        );
    }
}