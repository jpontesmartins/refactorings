const medicalScore = require("./score");

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
    const score = medicalScore.score(candidate, medicalExam, scoringGuide);

    //assert
    expect(score).toBe(-5);


});