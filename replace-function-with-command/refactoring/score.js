function score(candidate, medicalExam, scoringGuide) {
    return new Score(candidate, medicalExam, scoringGuide).execute();
}

class Score {
    constructor(candidate, medicalExam, scoringGuide) {
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
        this._result = 0;
        this._healthLevel = 0;
        this._highMedicalRiskFlag = false;
    }

    execute() {
        this.scoreSmoking();
        this.scoreCandidateOriginState();
        this.finalScore();
        return this._result;
    }


    finalScore() {
        this._result -= Math.max(this._healthLevel - 5, 0);
    }

    scoreCandidateOriginState() {
        let certificationGrade = "regular";
        if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
            certificationGrade = "low";
            this._result -= 5;
        }
    }

    scoreSmoking() {
        if (this._medicalExam.isSmoker) {
            this._healthLevel += 10;
            this._highMedicalRiskFlag = true;
        }
    }
}



module.exports = Score;