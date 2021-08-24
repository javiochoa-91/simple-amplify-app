import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser, createLoan} from './../../graphql/mutations.js'
import { listLoans, listUsers } from './../../graphql/queries.js'
import './style.scss';  
import Navbar from './../navbar';
  
  const initialUserState = {name: '', email: '', address: '', credit: '', loan: ''};
  const initialLoanState = {type: '', amount: '', isApprovde: false };
  
  const Apply = () => {
  
    const [formState, setFormState] = useState(initialUserState);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    function setInput(key, value) {
      setFormState({ ...formState, [key]: value})
    }
  
    async function fetchUsers() {
      try {
        const userData = await API.grahql(graphqlOperation(listUsers));
        const users = userData.data.listUsers.items;
        setUsers(users);
      } catch (err) { console.log('Error fetching users')};
    } 
  
    async function addUser() {
      try {
        const user = { ...formState};
        setUsers([...users, user]);
        setFormState(initialUserState);
        await API.graphql(graphqlOperation(createUser, {input: user}));
      } catch (err) {
        console.log('Error creating user');
      }
    }

    const handlerForm = ({target: {value, name}}) => {
      setUsers({
          [name]: value
      });

  }
  
    return (
      <div className="apply">
        <Navbar/>
        <div className="container">
          <Form className="form-group">
            <div className="form-control">
              <label>Name</label>
              <input type="name" className="name-input" 
              value={formState.name} aria-describedby="nameHelp" 
              placeholder="Enter Full Name"
              onChange={handlerForm} />
            </div>
            <div className="form-control">
              <label>Email</label>
              <input type="email" className="email-input" 
              value={formState.email} aria-describedby="emailHelp" 
              placeholder="Enter Email" 
              onChange={handlerForm}/>
            </div>
            <div className="form-control">
              <label>City</label>
              <input type="Address" className="address-input" 
              value={formState.address} aria-describedby="addressHelp" 
              placeholder="Enter City" 
              onChange={handlerForm}/>
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={addUser}>Submit</button>
          </Form>
        </div>
    </div>
    );
}
export default Apply;