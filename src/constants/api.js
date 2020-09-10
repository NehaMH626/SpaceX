export default {
  Launches_api: {
    allLaunches_API: "https://api.spacexdata.com/v3/launches",
    oneLaunch_API: "https://api.spacexdata.com/v3/launches/{{flight_number}}",
    upcomingLaunch_API: "https://api.spacexdata.com/v3/launches/upcoming",
    pastLaunch_API: "https://api.spacexdata.com/v3/launches/past",
    latestLaunch_API: "https://api.spacexdata.com/v3/launches/latest",
    nextLaunch_API: "https://api.spacexdata.com/v3/launches/next",
  },
  History_api: {
    allEvents_API: "https://api.spacexdata.com/v3/history",
    oneEvent_API: "https://api.spacexdata.com/v3/history/{{id}}",
  },
  Company_api: {
    company_API: "https://api.spacexdata.com/v3/info",
  },
  Mission_api: {
    allMission_API: "https://api.spacexdata.com/v3/missions",
    oneMission_API: "https://api.spacexdata.com/v3/missions/{{mission_id}}",
  },
};
