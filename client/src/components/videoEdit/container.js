import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../base/header';
import Footer from '../base/footer';
import FormEdit from './form';
import videoService from '../../services/videoService';
import { forEach } from 'lodash';

const EditContainer = function() {
  const { id: video_key } = useParams();
  const [categories, setCategories] = useState([]);
  const [selectTeams, setSelectTeams] = useState([]);
  const [video, setVideo] = useState(null);

  const queryData = useCallback(async function () {
    try
    {
      let cats = await videoService.getCategoryList();
      setCategories(cats);

      let videoInfo = await videoService.getVideoByKey(video_key);
      setVideo(videoInfo);      
      
      //if(videoInfo.TeamIds) {        
      //  let teamIds = JSON.parse(empInfo.TeamIds);
      //  let ids = [];
      //  forEach(t1, (item) => {
      //    if(Array.isArray(teamIds) && teamIds.length && teamIds.indexOf(item.TeamId) >= 0) {
      //      ids.push(item);
      //    }
      //  });        
      //  setSelectTeams(ids);
      //}
    }
    catch (err) {
      throw err;
    }
  }, [video_key]);
    
  useEffect(() => {
    queryData();
  },[queryData]);

  const saveVideo = async (e) => {
    e.preventDefault();
    //try 
    //{
    //  let teamIds = [];
    //  forEach(selectTeams, item => {
    //    teamIds.push(item.TeamId);
    //  });
    //  let res1 = await videoService.updateEmployee(employee.EmployeeKey, employee.EmployeeName);
    //  let res2 = await videoService.assignEmployee(employee.EmployeeKey, teamIds);
    //  
    //  if(res1 && res2) alert('Submit is success!');
    //}
    //catch (err) {
    //  throw err;
    //}
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
        <FormEdit employee={video}
                  teams={categories}
                  selectTeams={selectTeams}
                  saveEmployee={saveVideo}
                  onSelectChangeTeam={onSelectChangeTeam}
                  onChangeEmployeeName={onChangeEmployeeName} />
        : null
      }
      <Footer />
    </div>
  );
}

export default EditContainer;