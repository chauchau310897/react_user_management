import React, { Component } from 'react';

import AddUser from './AddUser.js';
import UserInfo from './UserInfo.js';

class DataTable extends Component {

  deleteUser = (idUser) => {
    this.props.deleteUser(idUser);
  }

    mappingDataUser = () => this.props.dataUser.map((value,key) => (
      <UserInfo key={key} ten={value.ten} quyen={value.quyen} sdt={value.sdt} id={value.id} stt={key}
      editUser = {(editUserInfo)=>this.props.editUser(value)}
      thayDoiTrangThaiEditUser = {()=>this.props.thayDoiTrangThaiEditUser()}
      deleteUser = {(idUser)=>this.deleteUser(idUser)}></UserInfo>
    ))

    render() {
        console.log(this.props.dataUser);
        return (
            <div className="container">
            <hr />
            <div className="row">
              <div className="col">
                <table className="table table-striped table-hover ">
                  <thead className="thead-inverse">
                    <tr>
                      <th>STT</th>
                      <th>Tên</th>
                      <th>Điện thoại</th>
                      <th>Quyền</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.mappingDataUser()}
                    
                  </tbody>
                </table> 
              </div>

              
                 <AddUser hienThiForm = {this.props.hienThiForm}  newUserInfo = {(ten,sdt,quyen) => this.props.newUserInfo(ten,sdt,quyen)}></AddUser>
              
              
            </div>
          </div>
          
        );
    }
}

export default DataTable;