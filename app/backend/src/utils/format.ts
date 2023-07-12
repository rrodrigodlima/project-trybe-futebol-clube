import { FullMatch, ResumeMatch, TeamData } from '../interfaces/Leaderboard';

function resumeMatch(matches: FullMatch[], home: boolean): ResumeMatch[] {
  return matches
    .map(({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, homeTeam, awayTeam }) => ({
      id: home ? homeTeamId : awayTeamId,
      name: home ? homeTeam.teamName : awayTeam.teamName,
      goalsFavor: home ? homeTeamGoals : awayTeamGoals,
      goalsOwn: home ? awayTeamGoals : homeTeamGoals,
      victory: home ? homeTeamGoals > awayTeamGoals : awayTeamGoals > homeTeamGoals,
      draw: homeTeamGoals === awayTeamGoals,
      loss: home ? homeTeamGoals < awayTeamGoals : awayTeamGoals < homeTeamGoals,
    }));
}

function getPoints(victory: boolean, draw: boolean): number {
  if (victory) return 3;
  if (draw) return 1;
  return 0;
}

export function formatMatch(matches: FullMatch[], home: boolean): TeamData[] {
  const resume = home ? resumeMatch(matches, true) : resumeMatch(matches, false);
  const splittedTeams = [...new Set(resume.map(({ id }) => id))]
    .map((id) => resume.filter((match) => match.id === id));
  const result = splittedTeams.map((team) => ({
    name: team[0].name,
    totalPoints: team.reduce((acc, { victory, draw }) => acc + getPoints(victory, draw), 0),
    totalGames: team.length,
    totalVictories: team.reduce((acc, { victory }) => (victory ? acc + 1 : acc), 0),
    totalDraws: team.reduce((acc, { draw }) => (draw ? acc + 1 : acc), 0),
    totalLosses: team.reduce((acc, { loss }) => (loss ? acc + 1 : acc), 0),
    goalsFavor: team.reduce((acc, { goalsFavor }) => acc + goalsFavor, 0),
    goalsOwn: team.reduce((acc, { goalsOwn }) => acc + goalsOwn, 0),
  })).map((team) => ({
    ...team,
    goalsBalance: team.goalsFavor - team.goalsOwn,
    efficiency: ((team.totalPoints / (team.totalGames * 3)) * 100),
  })).sort((a, b) => b.totalGames - a.totalGames);
  return result;
}

export function mergeMatch(match1: TeamData[], match2: TeamData[]): TeamData[] {
  const result = match1.map((team) => {
    const team2 = <TeamData> match2.find(({ name }) => team.name === name);
    return {
      name: team.name,
      totalPoints: team.totalPoints + team2.totalPoints,
      totalGames: team.totalGames + team2.totalGames,
      totalVictories: team.totalVictories + team2.totalVictories,
      totalDraws: team.totalDraws + team2.totalDraws,
      totalLosses: team.totalLosses + team2.totalLosses,
      goalsFavor: team.goalsFavor + team2.goalsFavor,
      goalsOwn: team.goalsOwn + team2.goalsOwn,
      goalsBalance: (team.goalsFavor + team2.goalsFavor) - (team.goalsOwn + team2.goalsOwn),
      efficiency: (
        ((team.totalPoints + team2.totalPoints) / ((team.totalGames + team2.totalGames) * 3)) * 100
      ),
    };
  });
  return result;
}

export function sortMatch(formattedMatches: TeamData[]): TeamData[] {
  return formattedMatches.sort((a, b) => {
    if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
    if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
    if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
    return b.goalsFavor - a.goalsFavor;
  });
}
