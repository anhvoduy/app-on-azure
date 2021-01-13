import React, { useState, useEffect, useCallback } from 'react';
import Header from '../base/header';
import List from './list';
import Footer from '../base/footer';
import baseService from '../../services/baseService';

const PAGE_SIZE_LIST = [
  {
    label: '500',
    value: '500',
  },
  {
    label: '1000',
    value: '1000'
  },
  {
    label: '1500',
    value: '1500'
  }
];

const Container = function() {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [pageSize, setPageSize] = useState([PAGE_SIZE_LIST[0]]);
  const [pageTotal, setPageTotal] = useState(10);

  const queryData = useCallback(async function (pSize, pIndex) {
    try
    {
      setLoading(true);

      let resEmpInfo = await baseService.getEmployees(pSize, pIndex);
      let { page_total, page_data } = resEmpInfo;
      setPageTotal(page_total);
      setEmployees(page_data);

      setLoading(false);
    }
    catch (err) {
      setLoading(false);
      throw err;
    }
  }, []);
  
  useEffect(() => {
    queryData(500, 0);
  },[queryData]);

  const handlePageClick = async function(selectedPage) {
    try 
    {
      let pSize = pageSize[0].value;
      let pIndex = selectedPage.selected;
      return queryData(pSize, pIndex);
    }
    catch (err) {
      throw err;
    }
  }

  const onChangePageSize = (selectedItem) => {
    try
    {
      let pSize = selectedItem[0].value;
      setPageSize(selectedItem);

      let pIndex = 0;
      return queryData(pSize, pIndex);
    }
    catch (err) {
      throw err;
    }
  }

  return (
    <div className='wrap employee-page'>
      <Header />      
      
      <List loading={loading}
            employees={employees} 
            handlePageClick={handlePageClick} 
            pageTotal={pageTotal}
            pageSize={pageSize}
            pageSizeList={PAGE_SIZE_LIST}
            onChangePageSize={onChangePageSize} />
      
      <Footer />
    </div>
  );
}

export default Container;