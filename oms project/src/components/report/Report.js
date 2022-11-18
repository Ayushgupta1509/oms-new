import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from '../../pages/Navs'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import FilterListIcon from '@mui/icons-material/FilterList';
import Footer from '../footer/Footer';
// import FilterListIcon from '@mui/icons-material/FilterList';
function Report() {
  const [items,setItems] =useState([]);
const handlePageClick = (data) =>{

}


 //sorting start
    const [order, setorder] = useState("ASC");
    const sorting = (col) => {
        if (order === "ASC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setorder("DSC");
        }
        if (order === "DSC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setorder("ASC");
        }
    }
//sorting end



    const [data, setData] = useState([])
    useEffect(() => {
      fetch("http://meters.siotel.in:8005/geomap/").then((result)=>{
          result.json().then((resp)=>{
            // console.warn("result",resp)
            setData(resp)
          })
        })
    }, [])
    console.warn(data)


   
    const [searchTerm, setSearchTern] = useState("");

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    
  return (
    <>
    <Navs/>
    <div>
        <div className='input-group mb-3 mt-3'>
            <input  type="text" className='form-control' placeholder='Search' aria-label='username' aria-describedby='basic-addon1' onChange={(e)=>{setSearchTern(e.target.value)}}></input>
        </div>

      {/* Excle start */}
      <div className='mx-3'>
        <ReactHTMLTableToExcel
        style={{marginLeft:"1rem"}}
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename={"OMS Report "+date}
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>
                    </div>
      {/* Excle end */}

          <div className='table-responsive'>        
    <table  class="table table-primary " id="table-to-xls">
   
      <thead>
        <tr>
          <th>ID  </th>
          <th onClick={()=>sorting("deveui")}>Deveui <FilterListIcon/></th>
          <th onClick={()=>sorting("address")}>Address <FilterListIcon/></th>
          <th onClick={()=>sorting("title")}>TITLE <FilterListIcon/></th>
          <th onClick={()=>sorting("pressure")}>Pressure at OMS <FilterListIcon/></th>
          <th onClick={()=>sorting("flowrate")}>Flow Rate <FilterListIcon/></th>
          <th onClick={()=>sorting("volume")}>Today's volume <FilterListIcon/></th>
          <th onClick={()=>sorting("battery_level")}>Battery Status <FilterListIcon/></th>
          <th onClick={()=>sorting("door_status")}>Door Status <FilterListIcon/></th>
          <th onClick={()=>sorting("sch_time")}>Sch_time <FilterListIcon/></th>
        </tr>
      </thead>
      <tbody>
        {/* search start */}
       { 
      data.filter((val) => {
        if (searchTerm === "") {
        return val;
        } else if (
        val.address.toLowerCase().includes (searchTerm.toLowerCase())
        ){
          return val;
        }
      }).map((item)=>
       <tr>
          <td>{item.id}</td>
          <td>{item.deveui}</td>
          <td>{item.address}</td>
          <td>{item.title}</td>
          <td>{item.pressure}</td>
          <td>{item.flowrate}</td>
          <td>{item.volume}</td>
          <td>{item.battery_level}</td>
          <td>{item.door_status}</td>
          <td>{item.sch_time}</td>
         
        </tr>
        )}
         {/* search end */}
      </tbody>
      
    </table>
    </div>  
    </div>
    <ReactPaginate
    previousLabel={'Previous'}
    nextAriaLabel={'Next'}
    breakLabel={'...'}
    pageCount={15}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    onPageChange={handlePageClick}
    containerClassName={'pagination justify-content-center'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
    />
    <Footer/>
    </>
  );
}

export default Report;
