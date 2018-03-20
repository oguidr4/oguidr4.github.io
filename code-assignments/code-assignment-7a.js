let projects = [{
  id: 1,
  title: "Book Assignment 1",
  URL: "https://www.arcgis.com/apps/MapTour/index.html?appid=5fdd5b64b4d849e0a68f3d016d0d91c3",
  hasimage: true,
  description: "Book Assignment 1 consits of an interesting story map tour of Pittsburgh, Pennsylvania."
},{
  id: 2,
  title: "Book Assignment 2",
  URL: "https://www.arcgis.com/apps/View/index.html?appid=dbd5b6aafe4f434b97fb5ff954bffed8",
  hasimage: true,
  description: "Book Assignment 2 compares average property values in different cities across America over time."
},{
  id: 3,
  title: "Book Assignment 3a",
  URL: "https://oguidry1345.maps.arcgis.com/apps/GeoForm/index.html?appid=80d6daed0ba945179e3d051e47663b9c",
  hasimage: true,
  description: "Book Assignment 3a is a web form that allows users to report sightings of police suspects on LSU's campus."
},{
  id: 5,
  title: "Book Assignment 5",
  URL: "https://oguidry1345.maps.arcgis.com/apps/webappviewer/index.html?id=2f82fb2f48104de9b24213babba82f27",
  hasimage: true,
  description: "Book Assignment 5 is an interactive map of East Baton Rouge schools that allows the user to apply filters and search for schools based on their needs."
}]

for (let i = 0; i < projects.length; i++) {
  imagename(projects[i].title, projects[i].id)
}
