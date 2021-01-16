import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../base/header';
import Footer from '../base/footer';
import FormEdit from './form';
import courseService from '../../services/courseService';
import { forEach } from 'lodash';

const EditContainer = function() {
  const { id: emp_key } = useParams();
  const [teams, setTeams] = useState([]);
  const [selectTeams, setSelectTeams] = useState([]);
  const [employee, setEmployee] = useState(null);

  const queryData = useCallback(async function () {
    try
    {
      let t1 = await courseService.getTeams();
      setTeams(t1);

      let empInfo = await courseService.getEmployeeByKey(emp_key);
      setEmployee(empInfo);      
      
      if(empInfo.TeamIds) {        
        let teamIds = JSON.parse(empInfo.TeamIds);
        let ids = [];
        forEach(t1, (item) => {
          if(Array.isArray(teamIds) && teamIds.length && teamIds.indexOf(item.TeamId) >= 0) {
            ids.push(item);
          }
        });        
        setSelectTeams(ids);
      }
    }
    catch (err) {
      throw err;
    }
  }, [emp_key]);
    
  useEffect(() => {
    queryData();
  },[queryData]);

  const saveEmployee = async (e) => {
    e.preventDefault();
    try 
    {
      let teamIds = [];
      forEach(selectTeams, item => {
        teamIds.push(item.TeamId);
      });

      let res1 = await courseService.updateEmployee(employee.EmployeeKey, employee.EmployeeName);

      let res2 = await courseService.assignEmployee(employee.EmployeeKey, teamIds);
      
      if(res1 && res2) alert('Submit is success!');
    }
    catch (err) {
      throw err;
    }
  }

  const onSelectChangeTeam = (data) => {    
    setSelectTeams(data);    
  }

  const onChangeEmployeeName = (e) => {
    if(employee) employee.EmployeeName = e.target.value;
    setEmployee({...employee});
  }

  return (
    <div className='wrap employee-page'>
      <Header />
      {
        (employee && teams.length) ?
        <FormEdit employee={employee}
                  teams={teams}
                  selectTeams={selectTeams}
                  saveEmployee={saveEmployee}
                  onSelectChangeTeam={onSelectChangeTeam}
                  onChangeEmployeeName={onChangeEmployeeName} />
        : null
      }
      <Footer />
    </div>
  );
}

export default EditContainer;