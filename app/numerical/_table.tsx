"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

export type DataShow = {
  iteration: string;
  a: string;
  b: string;
  c: string;
  fc: string;
};

type props = {
  title: string;
  data: DataShow[];
};

function TableData({ data, title }: props) {
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader className="bg-gray-200">
        <TableRow className="">
          <TableHead className="font-bold text-md text-left">
            Iteration
          </TableHead>
          <TableHead className="font-bold text-md text-center">A</TableHead>
          <TableHead className="font-bold text-md text-center">B</TableHead>
          <TableHead className="font-bold text-md text-center">C</TableHead>
          <TableHead className="font-bold text-md text-center">F(c)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium text-left">
              {item.iteration}
            </TableCell>
            <TableCell className="font-medium text-center">{item.a}</TableCell>
            <TableCell className="font-medium text-center">{item.b}</TableCell>
            <TableCell className="font-medium text-center">{item.c}</TableCell>
            <TableCell className="font-medium text-center">{item.fc}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableData;
