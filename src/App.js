import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompleteTheLyrics />} />
        <Route path="/:singer" element={<CompleteTheLyrics />} />
      </Routes>
    </BrowserRouter>
  );
}

function CompleteTheLyrics() {
  const { singer } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLyric, setCurrentLyric] = useState("");
  const [lyrics, setLyrics] = useState([]);
  const [singers, setSingers] = useState([singer]);
  const handleClick = (buttonId) => {
    navigate(`/${buttonId}`);
  };

  const handleInputChange = (event) => {
    setCurrentLyric(event.target.value);
  };

  useEffect(() => {
    if (currentLyric !== "") {
      setLyrics([...lyrics, currentLyric]);
      setSingers([...singers, singer]);
      setCurrentLyric("");
    }
  }, [location]);
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4} />
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <h2>Complete The Lyrics</h2>
        </Grid>
        <Grid item xs={4} />
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
        >
          <Button
            variant="contained"
            className="squareButton"
            onClick={() => handleClick("first")}
            sx={{ backgroundColor: "#a389dc" }}
          >
            Singer 1
          </Button>
          <Button
            variant="contained"
            className="squareButton"
            onClick={() => handleClick("second")}
            sx={{ backgroundColor: "#97c866" }}
          >
            Singer 2
          </Button>
          <Button
            variant="contained"
            className="squareButton"
            onClick={() => handleClick("third")}
            sx={{ backgroundColor: "#43bfa2" }}
          >
            Singer 3
          </Button>
          <Button
            variant="contained"
            className="squareButton"
            onClick={() => handleClick("fourth")}
            sx={{ backgroundColor: "#d87bb0" }}
          >
            Singer 4
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            className="textBox"
            value={currentLyric}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: 800,
              height: 500,
              border: "1px solid gray",
              borderRadius: 5,
            }}
          >
            {lyrics.map((lyric, index) => (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <Box
                  sx={{
                    width: 700,
                    height: 30,
                    backgroundColor:
                      singers[index] === "first"
                        ? "#a389dc"
                        : singers[index] === "second"
                        ? "#97c866"
                        : singers[index] === "third"
                        ? "#43bfa2"
                        : "#d87bb0",
                    paddingLeft: 2,
                    alignItems: "center",
                    justifyContent: "left",
                    display: "flex",
                    borderRadius: 3,
                  }}
                >
                  {lyric}
                </Box>
              </Grid>
            ))}
            {currentLyric !== "" ? (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <Box
                  sx={{
                    width: 700,
                    height: 30,
                    backgroundColor:
                      singer === "first"
                        ? "#a389dc"
                        : singer === "second"
                        ? "#97c866"
                        : singer === "third"
                        ? "#43bfa2"
                        : "#d87bb0",
                    paddingLeft: 2,
                    alignItems: "center",
                    justifyContent: "left",
                    display: "flex",
                    borderRadius: 3,
                  }}
                >
                  {currentLyric}
                </Box>
              </Grid>
            ) : (
              <></>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
