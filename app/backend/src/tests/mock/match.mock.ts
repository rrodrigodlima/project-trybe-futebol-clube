const matches = [
  {
    id: 1,
    homeTeamId: 1,
    homeTeamGoals: 2,
    awayTeamId: 2,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Real Madrid'
    },
    awayTeam: {
      teamName: 'Barcelona'
    }
  },
  {
    id: 2,
    homeTeamId: 2,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Inter'
    },
    awayTeam: {
      teamName: 'Manchester'
    }
  },
];

const matchesData = [
  { dataValues: {
    id: 1,
    homeTeamId: 1,
    homeTeamGoals: 2,
    awayTeamId: 2,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Real Madrid'
    },
    awayTeam: {
      teamName: 'Barcelona'
    }
  }},
  { dataValues: {
    id: 2,
    homeTeamId: 2,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Inter'
    },
    awayTeam: {
      teamName: 'Manchester'
    }
  }},
];

const newMatch = {
  "id": 1,
  "homeTeamId": 1,
  "awayTeamId": 2,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
  "inProgress": false
};

export default {
  matches,
  matchesData,
  newMatch,
}