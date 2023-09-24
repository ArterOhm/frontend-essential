const main = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");
    console.log(response);

    const rawData = await response.json();

    if (!response.ok) {
      throw new Error(`code - ${response.status} - ${rawData.message}`);
    }
    console.log(rawData);
    const newdata = rawData.courses;
    console.log(newdata);

    // const AllabbrName = newdata.map((e) => {
    //   const i = document.getElementById("course")
    //   const h3 = document.createElement("h3")
    //   h3.classList.add("rrrr")
    //   h3.textContent = e.abbrName
    //   return i.appendChild(h3)
    // })
    // const AllcourseNameEn = newdata.map((e) => {
    //   return e.courseNameEn
    // })

    // const AllcourseNameTh = newdata.map((e) => {
    //   return e.courseNameTh
    // })

    // const AllcourseNo = newdata.map((e) => {
    //   return e.courseNo
    // })

    // const Allcredit = newdata.map((e) => {
    //   return e.credit
    // })

    // const AllcreditHours = newdata.map((e) => {
    //   return e.creditHours
    // })

    // const Alldepartment = newdata.map((e) => {
    //   return e.department
    // })

    // const AllgenEdType = newdata.map((e) => {
    //   return e.genEdType
    // })
    // const AlltotalSeats = newdata.map((e) => {
    //   return e.totalSeats
    // })

    // const AllupdatedAt = newdata.map((e) => {
    //   return e.updatedAt
    // })

    const All = newdata.map((e) => {
      const i1 = document.getElementById("course");
      const newList = document.createElement("div");
      newList.textContent = "";
      newList.classList.add("course-list");
      i1.appendChild(newList);

      const h3courseNo = document.createElement("h3");
      const pEn = document.createElement("p");
      const pTh = document.createElement("p");
      const credit = document.createElement("p");
      const department = document.createElement("p");
      const creditHours = document.createElement("p");
      const totalSeats = document.createElement("p");

      h3courseNo.textContent = e.courseNo + " " + e.abbrName;
      credit.textContent = "credit : " + Number(e.credit);
      pEn.textContent = "courseNameEn : " + e.courseNameEn;
      pTh.textContent = "courseNameTh : " + e.courseNameTh;
      department.textContent = "department : " + e.department;
      creditHours.textContent = "creditHours : " + e.creditHours;
      totalSeats.textContent = "totalSeats : " + Number(e.totalSeats);
      return (
        newList.appendChild(h3courseNo),
        newList.appendChild(pTh),
        newList.appendChild(pEn),
        newList.appendChild(credit),
        newList.appendChild(department),
        newList.appendChild(creditHours),
        newList.appendChild(totalSeats)
      );
    });

    // console.log(AllabbrName)
    // console.log(AllcourseNameEn)
    // console.log(AllcourseNameTh)
    // console.log(AllcourseNo)
    // console.log(Allcredit)
    // console.log(AllcreditHours)
    // console.log(Alldepartment)
    // console.log(AllgenEdType)
    // console.log(AlltotalSeats)
    // console.log(AllupdatedAt)
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
