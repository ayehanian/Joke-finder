import React, {useState} from "react";
import axios from "axios";
import { connect } from "react-redux";
import InputBase from "@material-ui/core/InputBase";

import {
    searchPhrases,
    searchPhrasesFailure,
} from "../../store/actions/Search";


const CustomizedSearch = ({ searchPhrases, searchPhrasesFailure }) => {

    const [text, setText] = useState({query: ""});

    // const [enter, setEnter] = useState(false);

    function search() {

        axios
            .get(`https://api.chucknorris.io/jokes/search?query=${text.query}`)
            .then(resp => {
                console.log(resp);
                searchPhrases(resp.data);
            })
            .catch(err => {
                console.log(err);
                searchPhrasesFailure(err);
            });
    }

    const searchChange = prop => event => {
        setText({...text, [prop]: event.target.value});
    };


    return (
        <>
            <InputBase
                placeholder="Free text search..."
                onChange={searchChange("query")}
                inputProps={{'aria-label': 'search'}}
            />
            <button onClick={search}>go</button>
        </>
    );
};

export default connect(null, { searchPhrases, searchPhrasesFailure })(
    CustomizedSearch
);
/*

import React, {useState} from "react";
import axios from "axios";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";


const CustomizedSearch = () => {

  const [text, setText] = useState({ query: "" });
  // const [enter, setEnter] = useState(false);

  function search() {
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${text.query}`)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const searchChange = prop => event => {
    setText({ ...text, [prop]: event.target.value });
  };

  // const onEnter = event => {
  //   if (
  //     event.key === "Enter" &&
  //     text.match(/^[`'"()A-Za-zd.s_-]{3,25}/)
  //   ) {
  //     search();
  //     setEnter(true);
  //   }
  // };

  return (
    <>
      {/!*{enter && }*!/}
      <ValidatorForm
        noValidate={false}
        onSubmit={search}
        // onKeyPress={event => onEnter(event)}
      >
        <TextValidator
          value={text.query}
          onChange={searchChange("query")}
          variant="outlined"
          size="small"
          placeholder="Free text search..."
          validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{3,25}"]}
          errorMessages={[]}
        />
      </ValidatorForm>
    </>
  );
};

export default CustomizedSearch;
*/
