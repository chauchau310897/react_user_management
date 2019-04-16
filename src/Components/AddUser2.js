import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua: false
        }
    }

    hienthiNut = () => {
        if(this.state.trangThaiChinhSua === true ){
            return <div className="btn btn-group btn-warning" onClick={()=> this.thayDoiTrangThai()} style={{width: '16rem', marginBottom: '10px'}}>Đóng lại</div>;
        }
        else{
            return <div className="btn btn-group btn-info" onClick={()=> this.thayDoiTrangThai()} style={{width: '16rem', marginBottom: '10px'}}>Thêm User</div>;
        }
    }
    
    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua : ! this.state.trangThaiChinhSua
        });
    }

    hienThiForm = () => {
        if(this.state.trangThaiChinhSua === true){
            return (
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                
                <div className="card-header text-center">Thêm mới</div>
                <div className="card-body text-primary">
                  <div className="form-group">
                    <label >Username</label>
                    <input type="text" className="form-control"   />
                  </div>
                  <div className="form-group">
                    <label >Điện thoại</label>
                    <input type="text" className="form-control"  />
                  </div>
                  <div className="form-group">
                    <div className="form-group">
                      <label >Quyền</label>
                      <select className="custom-select" required>
                        <option value>Chọn quyền</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                        <option value={3}>User</option>
                      </select>
                    </div>
                  </div>
                  <div className="btn btn-block btn-success">Thêm</div>
                </div>
              </div>
            )
        }
        else{

        }
    }

    render() {
        return (
            <div>
                
            {this.hienthiNut()}
            {this.hienThiForm()}
            
          </div>
        );
    }
}

export default AddUser;