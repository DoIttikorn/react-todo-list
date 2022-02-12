import React from "react";
import { Button, Col, Row, Select } from "antd";
const { Option } = Select;
const AppHeader = () => {
  return (
    <>
      <Row justify="space-between">
        <Col>
          <Button type="primary">Add Task</Button>
        </Col>
        <Col>
          <Select defaultValue="All" className="w-[150px]">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>

          </Select>
        </Col>
      </Row>
    </>
  );
};

export default AppHeader;
