import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import "./App.css";

import { getAppDetail } from "./redux/slices/appInfo";

import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { usePrepareData } from "./hooks/prepareData";

import CustomAccordion from "./components/deneme";

function App() {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    dispatch(getAppDetail());
  }, [dispatch]);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const preparedData = usePrepareData(language);

  return (
    <div className="App">
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Grid item sx={{ marginTop: "1rem", marginRight: "1rem" }}>
          <FormControl>
            <InputLabel>Languages</InputLabel>
            <Select
              inputProps={{ "aria-label": "Without label" }}
              value={language}
              label="Languages"
              onChange={handleChange}
              sx={{ width: 200 }}
            >
              <MenuItem value={"english"}>English</MenuItem>
              <MenuItem value={"turkish"}>Turkish</MenuItem>
              <MenuItem value={"german"}>German</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          {Object.keys(preparedData).map((val, index) => {
            return (
              <CustomAccordion
                key={index}
                name={preparedData[val].name}
                title={preparedData[val].title ?? null}
                screenshots={preparedData[val].screenshots}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
