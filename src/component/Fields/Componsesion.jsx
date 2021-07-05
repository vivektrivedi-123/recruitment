import React,{useState} from 'react'
import Joi from 'joi-browser'
function Componsesion() {
  const[state,setState]=useState({
    effective_date:"",
    currency:"",
    annual_salary:"",
    pay_type:"",
    pay_rate_value:"",
    pay_rate:"",
    payout_freq:"",
    pay_group:"",
    pay_method:"",
    work_hours:"",
    work_hours_rate:"",
    additional_detail_compensation:"",
    pay_comission:"",
    variable_pay_percentage:"",
    variable_pay_amount:"",
    variable_freq:"",
    variable_details:"",
    desc:"",
    bonus_effective_dates:"",
    bonus_type:"",
    bonus_currency:"",
    amount:"",
    additional_detail:"",
    grant_date:"",
    grant_number:"",
    grant_reasons:"",
    grant_type:"",
    expiration_date:"",
    stock_currency:"",
    no_of_stock:"",
    exercise_price:"",
    exercise_discount:"",
    fair_market_value:"",
    target_range:"",
    vesting_acceleration_type:"",
    vesting_commencement_type:"",
    vesting_period:"",
    vesting_schedule:"",
    vesting_frequency:"",
    stock_pay_rate:"",
    summary:"",
   

  })
const[errors,setErrors]=useState({})

const handleChange=(e)=>{
  const{value,name}=e.target;
  let res=validatePropery(name,value,schema)
  if(res)
  {
    setErrors(res)
  }
  else
  {
    setErrors('')
  }
  setState({...state,[name]:value})
}

const handleChecked=(e)=>{
  setState({...state,[e.target.name]:e.target.checked})
}


const schema={
  currency:Joi.string().required().label('Currency'),
  bonus_type:Joi.number().required().label('Bonus Type'),
  amount:Joi.number().required().label('Amount'),
  grant_type:Joi.number().required().label('Grant Type')
}




const validatePropery = (name, value, schema) => {
  const obj = {
      [name]: value
  };
  const fieldSchema = {
      [name]: schema[name]
  };
  //return result
  const result = Joi.validate(obj, fieldSchema);
  if(!result.error) return null;
  console.log(result)
const errors={}
   
  for(let item of result.error.details)  errors[item.path[0]]=item.message;
  return errors;
  // result.error === null -> valid
}
 const validate = () => {
  let option={abortEarly:false}
  const result = Joi.validate(state, schema,{
    abortEarly:false
  })
  if(!result.error) return null;
  console.log(result)
const errors={} 
   
  for(let item of result.error.details)  errors[item.path[0]]=item.message;
  return errors;
}  

    return (
        <>
                 <h2 className="accordion-header" id="flush-headingOne3">
                    <button className="accordion-button bg-light collapsed font-600 fs-4 border-top-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne3">
                      Compensation - Salary &amp; Other Components
                    </button>
                  </h2>
                  <div id="flush-collapseOne3" className="accordion-collapse collapse" aria-labelledby="flush-headingOne3" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <h4 className="form-label mb-4">Salary</h4>
                      <h4 className="form-label mb-4">Overview</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Effective date</label>
                            <input 
                               className="form-control" 
                               id="example-date" 
                               type="date" 
                               name="date" 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Currency  <sup className="text-danger">*</sup></label>
                            <select
                             className="form-select" name="currency" onChange={handleChange} value={state.currency} id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                            {errors.currency?<p className="text-danger">{errors.currency}</p>:""}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Annual Salary</label>
                            <input 
                                type="text" 
                                id="simpleinput" 
                                className="form-control" 
                                name="annual_salary"
                                onChange={handleChange}
                                value={state.annual_salary}
                                />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Pay Type </label>
                            <select className="form-select" name="pay_type" value={state.pay_type} onChange={handleChange} id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <h4 className="form-label my-4">Salary Additional details</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Pay Rate value</label>
                            <input 
                              type="text" 
                              id="simpleinput" 
                              className="form-control" 
                              name="pay_rate_value"
                              value={state.pay_rate_value}
                              onChange={handleChange}
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Pay rate </label>
                            <select className="form-select" name="pay_rate" value={state.pay_rate} onChange={handleChange} id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Payout Frequency</label>
                            <select name="payout_freq" value={state.payout_freq}  onChange={handleChange} className="form-select" id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Pay group </label>
                            <select className="form-select" name="pay_group" value={state.pay_group} onChange={handleChange} id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Pay Method</label>
                            <select name="pay_method" value={state.pay_method} onChange={handleChange} className="form-select" id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Eligible Work Hours </label>
                            <input 
                               type="text" 
                               id="simpleinput" 
                               className="form-control" 
                               name="work_hours"
                               value={state.work_hours}
                               onChange={handleChange}
                               />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Work Hour Rate</label>
                            <select className="form-select" name="work_hour_rate" value={state.work_hours_rate} onChange={handleChange} id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Additional detail on compensation </label>
                            <textarea 
                                className="form-control" 
                                id="example-textarea" 
                                rows={2} 
                                name="additional_detail_compensation"
                                value={state.additional_detail_compensation}
                                onChange={handleChange}
                                />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Variable/Pay comission</label>
                            <select name="pay_comission" value={state.pay_comission} className="form-select" id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <h4 className="form-label my-4">Salary Type Section</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Variable Pay Percentage</label>
                            <input 
                              type="text" 
                              id="simpleinput" 
                              className="form-control" 
                              name="variable_pay_percentage"
                              value={state.variable_pay_percentage}
                              onChange={handleChange}
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Variable Pay Amount </label>
                            <input 
                              type="text" 
                              id="simpleinput" 
                              className="form-control" 
                              name="vaiable_pay_amount"
                              value={state.variable_pay_amount}
                              onChange={handleChange}
                              />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Variable pay payout frequency</label>
                            <select name="variable_freq" vlue={state.variable_freq} onChange={handleChange} className="form-select" id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Variable Pay details </label>
                            <textarea 
                              className="form-control" 
                              id="example-textarea" 
                              rows={2} 
                              value={state.variable_details}
                              onChange={handleChange}
                              value="variable_details"
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Description notes </label>
                            <textarea 
                               className="form-control" 
                               id="example-textarea" 
                               rows={2} 
                               value={state.desc}
                               name="desc"
                               onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <h4 className="form-label my-4">Bonus Details</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Bonus Effective Date</label>
                            <input 
                                className="form-control" 
                                id="example-date" 
                                type="date" 
                                name="bonus_effective_dates" 
                              //  onChange={handleChange}
                                //value={state.bonus_effective_dates}
                                />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Bonus type <sup className="text-danger">*</sup></label>
                            <select className="form-select" id="example-select" name="bonus_type" value={state.bonus_type}   onChange={handleChange}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Bonus Currency</label>
                            <select className="form-select" id="example-select" onChange={handleChange} name="bonus_currency" value={state.bonus_currency}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Amount <sup className="text-danger">*</sup></label>
                            <input 
                              type="text" 
                              id="simpleinput" 
                              value={state.amount}
                              name="amount"
                              onChange={handleChange}
                              className="form-control" 
                            />
                            {errors.amount?<p>{errors.amount}</p>:""}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Additional Details</label>
                            <textarea 
                                className="form-control" 
                                id="example-textarea" 
                                rows={2} 
                                name="additional_detail"
                                value={state.additional_detail}
                                onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <h4 className="form-label my-4">Stock Grants</h4>
                      <h4 className="form-label mb-4">Stock Overview</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Grant Date</label>
                            <input 
                                className="form-control" 
                                id="example-date" 
                                type="date" 
                                name="date" 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Grant number </label>
                            <input 
                                type="text" 
                                id="simpleinput" 
                                className="form-control" 
                                name="grant_number"
                                value={state.grant_number}
                                onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Grant reasons</label>
                            <select name="grant_reasons" value={state.grant_reasons} onChange={handleChange} className="form-select" id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Grant Type <sup className="text-danger">*</sup></label>
                            <select name="grant_type" value={state.grant_type} onChange={handleChange} className="form-select" id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                            {errors.grant_type?<p>{errors.grant_type}</p>:""}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Expiration Date</label>
                            <input 
                                className="form-control" 
                                id="example-date" 
                                type="date" 
                                name="date" 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Stock currency </label>
                            <select className="form-select" name="stock_currency" onChange={handleChange} value={state.stock_currency} id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <h4 className="form-label my-4">Stock Information</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">No of Stock <sup className="text-danger">*</sup></label>
                            <input 
                                type="text" 
                                id="simpleinput" 
                                className="form-control"
                                name="no_of_stock"
                                onChange={handleChange}
                                value={state.no_of_stock}
                             />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Exercise price </label>
                            <input 
                              type="text" 
                              id="simpleinput" 
                              className="form-control" 
                              name="exercise_price"
                              value={state.exercise_price}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Exercise Discount</label>
                            <input 
                                type="text" 
                                id="simpleinput" 
                                className="form-control"
                                name="exercise_discount"
                                value={state.exercise_discount}
                                onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Fair market value per Share</label>
                            <input 
                               type="text" 
                               id="simpleinput" 
                                className="form-control"
                                name=" fair_market_value"
                                value={state. fair_market_value}
                                onChange={handleChange} 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check mt-2">
                                <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="customCheck1" 
                                checked={state.target_range}
                                onChange={handleChecked}
                                name="target_range"
                                />
                            <label className="form-check-label" htmlFor="customCheck1">Within target range?</label>
                          </div>
                        </div>
                      </div>
                      <h4 className="form-label my-4">Vesting Information</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Vesting Acceleration Type</label>
                            <select className="form-select" id="example-select" name="vesting_acceleration_type" value={state.vesting_commencement_type} onChange={handleChange}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Vesting Commencement Type </label>
                            <input 
                                className="form-control" 
                                id="example-date" 
                                type="text" 
                                name="vesting_commencement_type"
                                value={state.vesting_commencement_type}
                              onChange={handleChange}
                             />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Vesting period</label>
                            <input 
                                type="text" 
                                id="simpleinput" 
                                className="form-control" 
                                name="vesting_period"
                                value={state.vesting_period}
                                onChange={handleChange}
                                />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Vesting schedule </label>
                            <select className="form-select" name="vesting_schedule" value={state.vesting_schedule} onChange={handleChange} id="example-select">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label className="form-label">Vesting frequency</label>
                            <input 
                               type="text" 
                               id="simpleinput" 
                               className="form-control" 
                               name="vesting_frequency"
                               onChange={handleChange}
                               value={state.vesting_frequency}
                               />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Stock pay rate </label>
                            <select className="form-select" id="example-select" value={state.stock_pay_rate} name="stock_pay_rate" onChange={handleChange}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-2">
                            <label htmlFor="example-textarea" className="form-label">Summery/notes</label>
                            <textarea 
                                className="form-control" 
                                id="example-textarea"
                                rows={5} 
                                value={state.summary}
                                name="summary"
                                onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>   
        </>
    )
}

export default Componsesion
