import { useSelector } from "react-redux";

export const usePrepareData = (language) => {
  const data = useSelector((state) => state.data.result);
  const copyData = { ...data };

  if (copyData) {
    switch (language) {
      case "english":
        return prepareEnglishData(copyData);
      case "turkish":
        return prepareTurkishData(copyData);
      case "german":
        return prepareGermanData(copyData);
      default:
        return null;
    }
  }
};

const prepareEnglishData = (data) => {
  let preparedData = { ...data.english };

  for (const key in data.english) {
    if (!(data.english[key].screenshots.length > 0)) {
      const phoneSize = Number(key);

      if (phoneSize < 5.5 && data.english["5.5"].screenshots.length > 0) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["5.5"].screenshots,
          title: "Using 5.5 Displays",
        };
      } else if (
        phoneSize > 5.5 &&
        data.english["6.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["6.5"].screenshots,
          title: "Using 6.5 Displays",
        };
      } else if (data.turkish[key].screenshots.length > 0) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish[key].screenshots,
          title: `Using Turkish(T.R) ${key} Display`,
        };
      } else if (
        phoneSize === 4.0 &&
        data.turkish["4.7"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish["4.7"].screenshots,
          title: `Using Turkish(T.R) 4.7 Display`,
        };
      } else if (
        phoneSize === 4.0 &&
        data.turkish["5.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish["5.5"].screenshots,
          title: `Using Turkish(T.R) 5.5 Display`,
        };
      } else if (
        phoneSize === 4.7 &&
        data.turkish["5.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish["5.5"].screenshots,
          title: `Using Turkish(T.R) 5.5 Display`,
        };
      } else if (
        phoneSize === 6.7 &&
        data.turkish["6.7"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish["6.7"].screenshots,
          title: `Using Turkish(T.R) 6.7 Display`,
        };
      } else if (
        phoneSize === 6.7 &&
        data.turkish["6.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish["6.5"].screenshots,
          title: `Using Turkish(T.R) 6.5 Display`,
        };
      } else if (
        phoneSize === 6.5 &&
        data.turkish["6.7"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish["6.7"].screenshots,
          title: `Using Turkish(T.R) 6.7 Display`,
        };
      } else if (
        phoneSize === 6.5 &&
        data.turkish["6.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish["6.5"].screenshots,
          title: `Using Turkish(T.R) 6.5 Display`,
        };
      }
    }
  }

  return preparedData;
};

const prepareTurkishData = (data) => {
  let preparedData = { ...data.turkish };

  for (const key in data.turkish) {
    if (!(data.turkish[key].screenshots.length > 0)) {
      const phoneSize = Number(key);

      if (phoneSize < 5.5 && data.turkish["5.5"].screenshots.length > 0) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish["5.5"].screenshots,
          title: "Using 5.5 Displays",
        };
      } else if (
        phoneSize > 5.5 &&
        data.turkish["6.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.turkish["6.5"].screenshots,
          title: "Using 6.5 Displays",
        };
      } else if (data.english[key].screenshots.length > 0) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english[key].screenshots,
          title: `Using English(E.N) ${key} Display`,
        };
      } else if (
        phoneSize === 4.0 &&
        data.english["4.7"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["4.7"].screenshots,
          title: `Using English(E.N) 4.7 Display`,
        };
      } else if (
        phoneSize === 4.0 &&
        data.english["5.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["5.5"].screenshots,
          title: `Using English(E.N) 5.5 Display`,
        };
      } else if (
        phoneSize === 4.7 &&
        data.english["5.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["5.5"].screenshots,
          title: `Using English(E.N) 5.5 Display`,
        };
      } else if (
        phoneSize === 6.7 &&
        data.english["6.7"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["6.7"].screenshots,
          title: `Using English(E.N) 6.7 Display`,
        };
      } else if (
        phoneSize === 6.7 &&
        data.english["6.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["6.5"].screenshots,
          title: `Using English(E.N) 6.5 Display`,
        };
      } else if (
        phoneSize === 6.5 &&
        data.english["6.7"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["6.7"].screenshots,
          title: `Using English(E.N) 6.7 Display`,
        };
      } else if (
        phoneSize === 6.5 &&
        data.english["6.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["6.5"].screenshots,
          title: `Using English(E.N) 6.5 Display`,
        };
      }
    }
  }

  return preparedData;
};

const prepareGermanData = (data) => {
  let preparedData = { ...data.german };

  for (const key in data.german) {
    if (!(data.german[key].screenshots.length > 0)) {
      const phoneSize = Number(key);

      if (phoneSize < 5.5 && data.german["5.5"].screenshots.length > 0) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.german["5.5"].screenshots,
          title: "Using 5.5 Displays",
        };
      } else if (phoneSize > 5.5 && data.german["6.5"].screenshots.length > 0) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.german["6.5"].screenshots,
          title: "Using 6.5 Displays",
        };
      } else if (data.english[key].screenshots.length > 0) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english[key].screenshots,
          title: `Using English(E.N) ${key} Display`,
        };
      } else if (
        phoneSize === 4.0 &&
        data.english["4.7"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["4.7"].screenshots,
          title: `Using English(E.N) 4.7 Display`,
        };
      } else if (
        phoneSize === 4.0 &&
        data.english["5.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["5.5"].screenshots,
          title: `Using English(E.N) 5.5 Display`,
        };
      } else if (
        phoneSize === 4.7 &&
        data.english["5.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["5.5"].screenshots,
          title: `Using English(E.N) 5.5 Display`,
        };
      } else if (
        phoneSize === 6.7 &&
        data.english["6.7"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["6.7"].screenshots,
          title: `Using English(E.N) 6.7 Display`,
        };
      } else if (
        phoneSize === 6.7 &&
        data.english["6.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["6.5"].screenshots,
          title: `Using English(E.N) 6.5 Display`,
        };
      } else if (
        phoneSize === 6.5 &&
        data.english["6.7"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["6.7"].screenshots,
          title: `Using English(E.N) 6.7 Display`,
        };
      } else if (
        phoneSize === 6.5 &&
        data.english["6.5"].screenshots.length > 0
      ) {
        preparedData[key] = {
          name: preparedData[key].name,
          screenshots: data.english["6.5"].screenshots,
          title: `Using English(E.N) 6.5 Display`,
        };
      }
    }
  }

  return preparedData;
};
