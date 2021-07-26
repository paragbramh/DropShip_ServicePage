import React from "react";
import { Table } from "react-bootstrap";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import "./table.css";
import Button from "@material-ui/core/Button";
const Table1 = () => {
  const users = [
    { Package: "Concept", Basic: "1", Standard: "2", Premium: "2" },
    {
      Package: "Print Ready",
      Basic: <CheckIcon />,
      Standard: <CheckIcon />,
      Premium: <CheckIcon />,
    },
    {
      Package: "Double Sided",
      Basic: <CheckIcon />,
      Standard: <CheckIcon />,
      Premium: <CheckIcon />,
    },
    {
      Package: "Source File",
      Basic: <ClearIcon />,
      Standard: <ClearIcon />,
      Premium: <CheckIcon />,
    },
    { Package: "Total ", Basic: "$15", Standard: "$25", Premium: "$50" },
    {
      Package: "",
      Basic: <Button className="btn_new">Select</Button>,
      Standard: <Button className="btn_new">Select</Button>,
      Premium: <Button className="btn_new">Select</Button>,
    },
  ];
  return (
    <>
      <div className="App">
        <h1>Compare Packages</h1>
        <Table className="table table-striped">
          <tbody>
            <tr>
              <th>Package</th>
              <th>
                Basic Package <br /> $15
              </th>
              <th>
                Standard Package <br /> $25
              </th>
              <th>
                Premium Package <br /> $50
              </th>
            </tr>
            {users.map((item, i) => (
              <tr key={i}>
                <td>{item.Package}</td>
                <td>{item.Basic}</td>
                <td>{item.Standard}</td>
                <td>{item.Premium}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Table1;
