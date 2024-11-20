import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ChartDate from "./ChartDate";
import ChartHind from "./ChartHind";
// import output_bellmansgatan from "./assets/output_ bellmansgatan.json";
// import output_hornsgatan from "./assets/output_ hornsgatan.json";
// import output_rosenlundsgatan from "./assets/output_ rosenlundsgatan.json";
// import output_erstagatan from "./assets/output_ erstagatan.json";

function App() {
  const [location, setLocation] = useState("Erstagatan");
  const [loading, setLoading] = useState(true);
  const [output_erstagatan, setData1] = useState(null);
  const [output_bellmansgatan, setData2] = useState(null);
  const [output_hornsgatan, setData3] = useState(null);
  const [output_rosenlundsgatan, setData4] = useState(null);
  const [output, setOutput] = useState(output_erstagatan);
  const [calculatedResult, setCalculatedResult] = useState([]);

  const [error, setError] = useState(null);

  const handleButtonClick = (value1, value2) => {
    setLocation(value1); // Update state based on button clicked
    setOutput(value2);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/eronariodito/Lab1-ID2223/refs/heads/main/Lab1_Dashboard/public/output_%20erstagatan.json"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON response
        setData1(result);
        setLocation(Erstagatan);
        setOutput(output_erstagatan);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/eronariodito/Lab1-ID2223/refs/heads/main/Lab1_Dashboard/public/output_%20bellmansgatan.json"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON response
        setData2(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/eronariodito/Lab1-ID2223/refs/heads/main/Lab1_Dashboard/public/output_%20hornsgatan.json"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON response
        setData3(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/eronariodito/Lab1-ID2223/refs/heads/main/Lab1_Dashboard/public/output_%20rosenlundsgatan.json"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse JSON response
        setData4(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (output != null) {
      const combinedArray = [];
      output.aq_today_df.forEach((item1) => {
        // Find the matching item from array2
        const matchingItem = output.prediction_df.find(
          (item2) => item2.date === item1.date
        );

        // If a match is found, combine the values
        if (matchingItem) {
          combinedArray.push({
            date: item1.date,
            pm25: item1.pm25,
            predicted: matchingItem.predicted_pm25,
          });
        }
        console.log(combinedArray);
        setCalculatedResult(combinedArray);
        console.log(location);
      });
    }
  }, [location]);

  // console.log(combinedArray);
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="h-screen w-screen">
        <Header />
        <div className="flex flex-col w-full align-middle justify-center items-center">
          <div className=" font-bold text-xl">Air Quality Categories</div>
          <div className="flex w-full h-20 justify-center">
            <div className="flex align-middle justify-center items-center mx-2">
              <div className="bg-green-200 h-5 w-8 mx-2"></div>
              Good: 0-49
            </div>
            <div className="flex align-middle justify-center items-center mx-2">
              <div className=" bg-yellow-200 h-5 w-8 mx-2"></div>
              Moderate: 50-99
            </div>
            <div className="flex align-middle justify-center items-center mx-2">
              <div className=" bg-orange-200 h-5 w-8 mx-2"></div>
              Unhealthy for some: 100-149
            </div>
            <div className="flex align-middle justify-center items-center mx-2">
              <div className=" bg-red-200 h-5 w-8 mx-2"></div>
              Unhealthy: 150-199
            </div>
            <div className="flex align-middle justify-center items-center mx-2">
              <div className=" bg-purple-200 h-5 w-8 mx-2"></div>
              Very Unhealthy: 200-299
            </div>
            <div className="flex align-middle justify-center items-center mx-2">
              <div className=" bg-amber-900 h-5 w-8 mx-2"></div>
              Hazardous: 300-500
            </div>
          </div>
        </div>

        <div className="w-full h-24 flex space justify-between px-72">
          <button
            className={`my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
              location === "Erstagatan"
                ? "bg-blue-500  border-transparent"
                : "border-blue-500 bg-transparent text-blue-700"
            }`}
            onClick={() => handleButtonClick("Erstagatan", output_erstagatan)}
          >
            Erstagatan
          </button>
          <button
            className={`my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
              location === "Hornsgatan"
                ? "bg-blue-500 border-transparent"
                : "border-blue-500 bg-transparent text-blue-700"
            }`}
            onClick={() => handleButtonClick("Hornsgatan", output_hornsgatan)}
          >
            Hornsgatan
          </button>
          <button
            className={`my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
              location === "Rosenlundsgatan"
                ? "bg-blue-500 border-transparent"
                : "border-blue-500 bg-transparent text-blue-700"
            }`}
            onClick={() =>
              handleButtonClick("Rosenlundsgatan", output_rosenlundsgatan)
            }
          >
            Rosenlundsgatan
          </button>
          <button
            className={`my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${
              location === "Bellmansgatan"
                ? "bg-blue-500 border-transparent"
                : "border-blue-500 bg-transparent text-blue-700"
            }`}
            onClick={() =>
              handleButtonClick("Bellmansgatan", output_bellmansgatan)
            }
          >
            Bellmansgatan
          </button>
        </div>
        <div className="w-full grid-cols-2 grid px-8">
          <div className="h-full px-4">
            <div className="text-center justify-center align-middle my-6 text-2xl font-bold">
              Prediction Chart
            </div>
            {output !== null && <ChartDate inputData={output.prediction_df} />}
          </div>
          <div className="flex flex-col h-full px-4">
            <div className="text-center  justify-center align-middle my-6 text-2xl font-bold">
              Hindcast Chart
            </div>
            <div className="grow">
              {calculatedResult.length == 0 ? (
                <div className="h-full justify-items-center flex justify-center align-middle text-2xl">
                  No hindcast data
                </div>
              ) : (
                <ChartHind inputData={calculatedResult} />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
