export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
  //const searchingBy = req.query.term; //ES6 이전 예전방식
  const {
    query: { term: searchingBy } //term을 searchingBy로 재할당
  } = req;
  //console.log(term); //searchingBy로 할당했기 때문에 오류 발생
  //console.log(searchingBy);
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });