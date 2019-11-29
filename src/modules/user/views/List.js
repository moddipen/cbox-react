import React from "react";
import { Table, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { loadUsers } from "../store/actions";

class ListUser extends React.Component {
  constructor(props) {
    super(props);

    this.typeColors = {
      "0": "#48BEFF",
      "1": "#3DFAFF",
      "2": "#43C59E",
      "3": "#3D7068",
      "4": "#14453D"
    };

    this.types = ["All", "0", "1", "2", "3", "4"];

    this.state = {
      users: this.props.users,
      filterUsers: this.props.users,
      types: {
        all: true,
        type_0: true,
        type_1: true,
        type_2: true,
        type_3: true,
        type_4: true
      }
    };
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.users,
      filterUsers: nextProps.users
    });
  }

  filterUserData = async () => {
    let users = await this.state.users.filter(user => {
      if (this.state.types.all) {
        return true;
      } else {
        return this.state.types["type_" + user.type];
      }
    });
    this.setState({
      filterUsers: users
    });
  };

  handleAllChange = data => {
    this.types.map((type, index) => {
      if (index !== 0) {
        return this.setState({
          types: {
            ...this.state.types,
            [`type_${type}`]: data
          }
        });
      }
      return false;
    });
  };

  handleChange = async e => {
    const name = e.target.name;
    await this.setState({
      types: {
        ...this.state.types,
        [name]: !this.state.types[name]
      }
    });
    if (name === "all") {
      await this.handleAllChange(this.state.types.all);
    } else {
      if (!this.state.types[name]) {
        this.setState({
          types: {
            ...this.state.types,
            all: false
          }
        });
      }
    }
    this.filterUserData();
  };

  render() {
    return (
      <div>
        <br />
        <Row form>
          {this.types.map((type, index) => {
            return (
              <Col key={index} md={2}>
                <FormGroup check>
                  <Label check>
                    <Input
                      checked={
                        index !== 0
                          ? this.state.types[`type_${type}`]
                          : this.state.types.all
                      }
                      type="checkbox"
                      name={index !== 0 ? `type_${type}` : "all"}
                      onChange={this.handleChange}
                    />{" "}
                    {index === 0 ? type : "Type " + type}
                  </Label>
                </FormGroup>
              </Col>
            );
          })}
        </Row>
        <br />
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Wallet-1</th>
              <th>Wallet-2</th>
              <th>Wallet-3</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filterUsers.map((user, index) => {
              let color = this.typeColors[`${user.type}`];
              return (
                <tr key={index}>
                  <th
                    style={{
                      backgroundColor: `${color}`
                    }}
                    scope="row"
                  >
                    {user.index}
                  </th>
                  <td>{user.email}</td>
                  <td>{user.fullName}</td>
                  <td>{user.wallet1}</td>
                  <td>{user.wallet2}</td>
                  <td>{user.wallet3}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => {
      return dispatch(loadUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUser);
