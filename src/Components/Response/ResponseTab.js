import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import formService from '../../services/formService';

const PREFIX = 'ResponseTab';

const classes = {
  table: `${PREFIX}-table`
};

const StyledTableBody = styled(TableBody)({
  [`& .${classes.table}`]: {
    minWidth: 650,
  },
});

function ResponseTab(props) {
  const [formData, setFormData] = React.useState({});
  const [responseData, setResponseData] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    if(props.formData) {
      // console.log(props.formData.questions.length);
      setQuestions(props.formData.questions)

      setFormData(props.formData)
    }
    var formId = props.formId
    if(formId !== undefined && formId !== "") {
      formService.getResponse(formId)
        .then((data) => {
          // console.log(data);
          setResponseData(data)
          }, error => {
            const resMessage =
              (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString();
            console.log(resMessage);
          }
      );
    }
  }, [props.formId, props.formData]);

  function getSelectedOption(qId, i, j) {
    var oneResData = responseData[j];
    //console.log(oneResData);

    var selectedOp = oneResData.response.filter(qss => qss.questionId === qId);
    console.log(selectedOp);

    if(selectedOp.length > 0) {
      var finalOption = questions[i].options.find(oo => oo._id === selectedOp[0].optionId);
      return finalOption.optionText
    } else {
      return "not attempted"
    }
  }

  return (
    <div>
      <p> Responses</p>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                {questions.map((ques, i)=>(
                  <TableCell key={i} align="right">{ques.questionText}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <StyledTableBody>
              { responseData.map((rs, j) => (
                <TableRow key={j}>
                  <TableCell component="th" scope="row">
                    {rs.userId}
                  </TableCell>
                  { questions.map((ques, i) => (
                    <TableCell key={i} align="right">{getSelectedOption(ques._id, i,j)}</TableCell>
                  ))}
                </TableRow>
              ))}
            </StyledTableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ResponseTab
