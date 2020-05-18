const Score = require("./score");

test(' score ', () => {
    //arrange
    const medicalExam = {
        isSmoker: true
    }

    const candidate = {
        originState: "SC"
    }

    const scoringGuide = {
        stateWithLowCertification: (originState) => {
            return false;
        }
    }

    //act
    const score = new Score(candidate, medicalExam, scoringGuide).execute();

    //assert
    expect(score).toBe(-5);


});