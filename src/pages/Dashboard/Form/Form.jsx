import React, {useState, useEffect} from 'react'

function Form() {
    const [data, setData] = useState([])

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    const[item, setItem] =useState('Enter Item Name')
    const[code, setCode] =useState("Enter Item Code")
    const[sales, setSales] =useState("Rs 0")
    const[purchase, setPurchase] =useState("Rs 0")
    const[unit, setUnit] =useState("UNIT")
    const[date, setDate] =useState(today)
    const [itemArr, setItemArr] = useState(0)
    
    var tempArr = []

    const save = () => {
        
        var itemObject = {
            'item': item,
            'code': code,
            'sales': sales,
            'purchase': purchase,
            'unit': unit,
            'date': date, 
            };
        tempArr.push(itemObject)
        localStorage.setItem("itemArray", JSON.stringify(tempArr))
        setItemArr(itemArr+1)
    }

    useEffect(()=>{
        console.log('local storage', localStorage.getItem("itemArray"))
        var tempData = localStorage.getItem("itemArray")
        setData(JSON.parse(tempData))
        console.log('Use Effect', data)
        tempArr.push(data)
        console.log('Temp arr from use effect', tempArr)
    },[itemArr])

  return (
    <div class="container-fluid">
        <div class="row  border-bottom border-top">
            <div class="col-7 border-right p-3 ">
                <h6>Items</h6>
            </div>
            <div class="col border-left p-3 px-5">
                <h6>Edit / Create Items</h6>
            </div>
        </div>
        <div class="row border-top min-h-100">
            <div class="col-7 p-3 border-right bg-light">
                <div class="search-box mb-4">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text custom-prepend" id="basic-addon1">
                            <img class="search-icon" src ="search-icon.png" alt ="" />
                        </span>
                    </div>
                    <input type="text" class="form-control custom-input" placeholder="Search Items" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div class="table-container bg-alert">
                    {/* tables */}
                <>
                <table class="table">
                <thead class="border bg-table-head" >
                                    
                    <tr>
                        <th className=""><strong>Item Name</strong></th>
                        <th className=""><strong>Item Code</strong></th>
                        <th className=""><strong>Selling Price</strong></th>
                        <th className=""><strong>Purchase Price</strong></th>
                        <th className=""><strong>Unit</strong></th>
                        <th className=""><strong>Date</strong></th>
                    </tr>
                </thead>
                    {data === [] ? (
                        <>
                        <tbody>
                        <td colspan="12" className="text-center">
                        <div class="row mt-5 py-5 inventory-none d-flex flex-column align-items-center justify-content-center">
                                <div class="inventory-img">
                                    <img src="icn_Inventory Reports.svg" alt="no inventory" />
                                </div>
                                <div class="inventory-text">
                                    <h5>You do not have any items to display</h5>
                                </div>
                            </div>
                            </td>
                        </tbody>
                            
                        </>
                    ):(
                        <>
                        
                        <tbody>
                            
                             {data.map((product, index)=>
                             <>
                               <tr className="border select-row" key={index}>
                                    <td><strong class="price fw-bold">{product.item}</strong></td>
                                    <td><strong class="price fw-bold">{product.code}</strong></td>
                                    <td><strong class="price fw-bold">Rs. {product.sales}</strong></td>
                                    <td><strong class="price fw-bold">Rs. {product.purchase}</strong></td>
                                    <td><strong class="price fw-bold">{product.unit}</strong></td>
                                    <td><strong class="price fw-bold">{product.date}</strong></td>
                                    
                                </tr>
                             </>
                                 
                            )}
                        </tbody>
                         
                                
                        </>
                    )}
                </table>
                
                
                </>
                </div>
            </div>
            <div class="col py-3 border-left">
                {/* create form section */}
                <div class="input-form-section">
                    <div class="row px-5">
                        <div class="col">
                            <h5>Item Name *</h5>
                            <input required class="custom-form-input py-2 px-3 rounded" placeholder={item} onChange={(e)=>setItem(e.target.value)  }/>
                        </div>
                        <div class="col">
                            <h5>Item Code</h5>
                            <input class="custom-form-input py-2 px-3 rounded" placeholder={code} onChange={
                                (e)=>setCode(e.target.value)
                            }/>
                        </div>
                    </div>
                    <div class="row my-3 px-4  py-2 bg-light">
                        <h6>Stock & Pricing Details (Optional)</h6>
                    </div>
                    <div class="row px-5 my-4">
                        <div class="col">
                            <h5>Sales Price</h5>
                            <input class="custom-form-input py-2 px-3 rounded" placeholder={sales} onChange={ 
                                (e)=>setSales(e.target.value)
                            }/>
                        </div>
                        <div class="col">
                            <h5>Purchase Price</h5>
                            <input class="custom-form-input py-2 px-3 rounded" placeholder={purchase} onChange={(e)=>setPurchase(e.target.value)
                            }/>
                        </div>
                    </div>
                    <div class="row px-5 my-4">
                        <div class="col">
                            <h5>Measuring UNIT</h5>
                            <div class="dropdown ">
                                <button class="btn custom-form-input text=left py-2 bg-white dropdown-toggle d-flex justify-content-between align-items-center" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select UNIT
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button class="dropdown-item" type="button" onClick={(e)=>setUnit('Pcs')
                                     }>Pcs</button>
                                    <button class="dropdown-item" type="button" onClick={(e)=>setUnit('Boxes')
                                     }>Boxes</button>
                                    <button class="dropdown-item" type="button" onClick={(e)=>setUnit('gms')
                                     }>gms</button>
                                     <button class="dropdown-item" type="button" onClick={(e)=>setUnit('Kgs')
                                     }>Kgs</button>
                                     <button class="dropdown-item" type="button" onClick={(e)=>setUnit('Ltrs')
                                     }>Ltrs</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <h5>Opening Stock Date</h5>
                            <input class="custom-form-input py-2 px-3 rounded" type="date" placeholder={date} onChange={ 
                                (e)=>setDate(e.target.value)
                            }/>
                        </div>
                    </div>
                    <div class="row px-5">
                        <button type="button submit" class="mx-3 py-2 custom-form-input btn btn-primary"
                        onClick={save} >Save</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form