import React from 'react';
import { Table } from 'reactstrap';
import './CSS/global.css';
import AdminHeader from './Layout/AdminHeader'

const PastBookingsTable=({data})=>{
    return(
        <>
        <div>
        <AdminHeader/>
        <div className="container-fluid">
        <div className="col-md-10 m-auto">
        <table className="table">
          <thead>
          <th>Booking ID</th>
          <th>Date </th>
          <th>Service Name</th>
          <th>Worker Name</th>
          <th>Time</th>
          </thead>
        </table>
             <div> {
            data && data.map((d)=>{
               return(
                    <div>
                    <table className="table">         
                      <tbody>
                        <td className="text-center" >{d.bookingID}</td>
                        <td className="text-center">{d.date}</td>
                        <td className="text-center">{d.serviceName}</td>
                        <td className="text-center">{d.workerName}</td>
                        <td className="text-center">{d.time}</td>
                      </tbody>          
                    </table>  
                  </div>
               )
           })
          } 
        
          <br/>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default PastBookingsTable;