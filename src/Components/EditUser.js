import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id: this.props.userEditObject.id,
          ten: this.props.userEditObject.ten,
          sdt: this.props.userEditObject.sdt,
          quyen: this.props.userEditObject.quyen
        }
      }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]: value
        })
    };

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.ten = this.state.ten;
        info.sdt = this.state.sdt;
        info.quyen = this.state.quyen;
        this.props.getEditUserInfo(info);
        this.props.thayDoiTrangThaiEditUser();
    }
    
    render() {
        console.log(this.props.userEditObject);
        return (
            <div className="col-sm-12">
                <form>
                    <div className="card border-warning mb-3">

                        <div className="card-header text-center">Sửa thông tin</div>
                        <div className="card-body text-warning">
                            <div className="form-group">
                                <label >Username</label>
                                <input type="text" className="form-control" onChange={(event) => this.isChange(event)} name="ten" required defaultValue={this.props.userEditObject.ten}/>
                            </div>
                            <div className="form-group">
                                <label >Điện thoại</label>
                                <input type="text" className="form-control" onChange={(event) => this.isChange(event)} name="sdt" required defaultValue={this.props.userEditObject.sdt} />
                            </div>
                            <div className="form-group">
                                <div className="form-group">
                                    <label >Quyền</label>
                                    <select className="custom-select" onChange={(event) => this.isChange(event)} name="quyen" required defaultValue={this.props.userEditObject.quyen}>
                                        <option value>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>User</option>
                                    </select>
                                </div>
                            </div>
                            <input type="button" className="btn btn-block btn-success" onClick={() => this.saveButton()} value="Sửa" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;