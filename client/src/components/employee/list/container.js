import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Table } from 'react-bootstrap';
import TableHeader from '../header';
import TableContent from '../content';
import ReactPaginate from 'react-paginate';
import Select from 'react-dropdown-select';
import Loading from '../../base/loading';

const List = function({ loading, employees, handlePageClick, pageTotal, pageSize, pageSizeList, onChangePageSize }) {  
  return (
    <Container>
      <Row>
        <Col>
          <h3>Employees</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Select style={{maxWidth: 300 + 'px'}} options={pageSizeList} multi={false} values={pageSize} onChange={onChangePageSize} />
        </Col>
        <Col>
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageTotal}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'} />
        </Col>
      </Row>
      {
        loading ? 
          <Row className='row-loading'>
            <Loading isLoading={loading} />
          </Row> 
        : <Row>
            <Table striped bordered hover size="sm">
              <TableHeader />
                <TableContent employees={employees}/>
            </Table>
          </Row>
      }
    </Container>
  );
}

List.propTypes = {
  loading: PropTypes.bool,
  employee: PropTypes.object,
  handlePageClick: PropTypes.func,
  pageTotal: PropTypes.number,
  pageSize: PropTypes.array,
  pageSizeList: PropTypes.array,
  onChangePageSize: PropTypes.func
};

export default List;