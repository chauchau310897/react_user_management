import React, { Component } from 'react';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      ten: '',
      sdt: '',
      quyen: ''
    }
  }


  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
    // console.log(value);
    this.setState({
      [name]: value
    });

    var item = {};
    item.id = this.state.id;
    item.ten = this.state.ten;
    item.sdt = this.state.sdt;
    item.quyen = this.state.quyen;
  }

  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="col">
          <form>
            <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>

              <div className="card-header text-center">Thêm User</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <label >Username</label>
                  <input type="text" className="form-control" onChange={(event) => this.isChange(event)} name="ten" required />
                </div>
                <div className="form-group">
                  <label >Điện thoại</label>
                  <input type="text" className="form-control" onChange={(event) => this.isChange(event)} name="sdt" required />
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <label >Quyền</label>
                    <select className="custom-select" onChange={(event) => this.isChange(event)} name="quyen" required>
                      <option value>Chọn quyền</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Moderator</option>
                      <option value={3}>User</option>
                    </select>
                  </div>
                </div>
                <input type="reset" className="btn btn-block btn-success" onClick={(ten, sdt, quyen) => this.props.newUserInfo(this.state.ten, this.state.sdt, this.state.quyen)} value="Thêm mới" />
              </div>
            </div>
          </form>
        </div>
      )
    }
  }


  render() {
    console.log(this.state);
    return (
      <div>

        {this.kiemTraTrangThai()}

      </div>
    );
  }
}

export default AddUser;