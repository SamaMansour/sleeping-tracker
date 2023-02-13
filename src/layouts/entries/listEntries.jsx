/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from "react";
import { Box, Flex, Grid, IconButton, Text } from "@chakra-ui/core";
import Pagination from "../../components/pagination";
import data from "../../mock-data.json";


const columns = [
  {
    text: "First Name",
    dataIndex: "first_name",
    span: 3
  },
  {
    text: "Last Name",
    dataIndex: "last_name",
    span: 3
  },
  {
    text: "Email",
    dataIndex: "email",
    span: 4
  },
  {
    text: "City",
    dataIndex: "city",
    span: 2
  }
];
const ListEntries = () => {
    const { next, prev, currentData, currentPage, maxPage } = Pagination(
      data,
      10
    );
    const [selectedId, setSelectedId] = useState(null);
    const totalSpan = columns.reduce((total, rec) => total + rec.span, 0);
  
    const renderHeaderColumn = (text, start, span) => {
      return (
        <Box
          bg="gray.200"
          px={2}
          py={2}
          minWidth={0}
          gridColumn={`${start} / span ${span}`}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {text}
        </Box>
      );
    };
  
    const getDataColumnBg = (idx, id) => {
      if (id === selectedId) {
        return { bg: "blue.100" }; // selected row
      } else if (idx % 2 === 0) {
        return { bg: "gray.50" };
      }
      return {};
    };
  
    const renderDataColumn = (id, text, start, span, idx, key) => {
      return (
        <Box
          px={2}
          py={1}
          {...getDataColumnBg(idx, id)}
          borderBottom={1}
          borderBottomColor="gray.200"
          minWidth={0}
          gridColumn={`${start} / span ${span}`}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          key={key}
          onClick={() => setSelectedId(id !== selectedId ? id : null)}
        >
          {text}
        </Box>
      );
    };
  
    const renderFooter = () => {
      return (
        <Flex
          bg="gray.200"
          px={2}
          py={1}
          minWidth={0}
          justifyContent="space-between"
          gridColumn={`1 / span ${totalSpan}`}
          overflow="hidden"
        >
          <IconButton
            aria-label="previous page"
            icon="arrow-left"
            variant="ghost"
            borderRadius={20}
            onClick={() => prev()}
          >
            prev
          </IconButton>
          <Text mt={2} fontSize="sm">
            page {currentPage} of {maxPage}
          </Text>
          <IconButton
            aria-label="next page"
            icon="arrow-right"
            variant="ghost"
            borderRadius={20}
            onClick={() => next()}
          >
            Next
          </IconButton>
        </Flex>
      );
    };
  
    const renderHeader = () => {
      const headerCols = [];
      let colStart = 1;
  
      columns.forEach(col => {
        headerCols.push(renderHeaderColumn(col.text, colStart, col.span));
        colStart += col.span;
      });
  
      return headerCols;
    };
  
    const renderDataRow = (rec, idx) => {
      let colStart = 1;
      // console.log("record id is" + rec.id);
  
      return columns.map(col => {
        const row = renderDataColumn(
          rec.id,
          rec[col.dataIndex],
          colStart,
          col.span,
          idx,
          `${idx}-${colStart}`
        );
        colStart += col.span;
        return row;
      });
    };
  
    const renderRows = data => {
      return data.map((rec, idx) => renderDataRow(rec, idx));
    };
  
    return (
      <>
        <Grid
          gridTemplateColumns={`repeat(${totalSpan}, 1fr [col-start])`}
          borderRadius={8}
          border="1px"
          borderColor="gray.200"
          overflow="hidden"
          minHeight={0}
          minWidth={0}
          mx={6}
          my={2}
        >
          {renderHeader()}
          {renderRows(currentData())}
          {renderFooter()}
        </Grid>
      </>

  )
}

export default ListEntries;