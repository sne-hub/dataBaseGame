import React from "react";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";

const DataTable = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>password</TableCell>
            <TableCell>Score:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact, index) => {
            return (
              <TableRow>
                <TableCell>{contact.userName}</TableCell>
                <TableCell>{contact.password}</TableCell>
                <TableCell>{contact.password}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
 
    </Grid>
  );
};

export default DataTable;
